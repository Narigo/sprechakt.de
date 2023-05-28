import path from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'node:url';
import { $, fetch } from 'zx';
import Airtable from 'airtable';
import type { Attachment } from 'airtable';
import type { AirtableBase } from 'airtable/lib/airtable_base';
import type { FieldSet } from 'airtable/lib/field_set';
import type Record from 'airtable/lib/record';
import type { QueryParams } from 'airtable/lib/query_params';
import type Table from 'airtable/lib/table';
import type {
	SprechAktAct,
	SprechAktEvent,
	SprechAktBlog,
	SprechAktImage,
	Image
} from '../../src/lib/types';
import { createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const apiKey = process.env.AIRTABLE_ACCESS_TOKEN as string;
const apiBase = process.env.AIRTABLE_API_BASE as string;
const showDrafts = process.env.SHOW_DRAFTS;
const includeDrafts = showDrafts === 'true';
const dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDirectory = path.resolve(dirname, '../../database');
const assetPath = path.resolve(dirname, '../../static/images/from-db');

run()
	.then(() => {
		console.log('done!');
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

async function run() {
	await mkdir(dbDirectory, { recursive: true });
	const base = new Airtable({ apiKey }).base(apiBase);
	const [slamDb, blogDb, actsDb, galleriesDb] = await Promise.all([
		getSlamsFromAirtable(base),
		getBlogFromAirtable(base),
		getActsFromAirtable(base),
		getGalleriesFromAirtable(base)
	]);
	slamDb.sort((a, b) => +new Date(b.date) - +new Date(a.date));
	blogDb.sort((a, b) => +new Date(b.date) - +new Date(a.date));
	await Promise.all([
		writeFile(path.resolve(dirname, `${dbDirectory}/acts.json`), JSON.stringify(actsDb)),
		writeFile(path.resolve(dirname, `${dbDirectory}/blog.json`), JSON.stringify(blogDb)),
		writeFile(path.resolve(dirname, `${dbDirectory}/slams.json`), JSON.stringify(slamDb)),
		writeFile(path.resolve(dirname, `${dbDirectory}/galleries.json`), JSON.stringify(galleriesDb))
	]);
}

async function fetchOrReuseCache({
	pathInAssets,
	image
}: {
	pathInAssets: string;
	image: Attachment;
}) {
	console.log('should check whether', pathInAssets, 'exists');
	const downloadFilePath = `${assetPath}/${pathInAssets}`;

	try {
		const result = await $`magick identify -ping -format '%w:%h' ${downloadFilePath}`;
		const [width, height] = result.stdout.split(':');
		return {
			filename: image.filename,
			height: parseInt(height, 10),
			id: image.id,
			pathInAssets,
			type: image.type,
			width: parseInt(width, 10)
		};
	} catch (err) {
		const response = await fetch(image.url);
		if (!response.ok || response.body === null) {
			throw new Error(`could not download ${image.url}`);
		}
		await promisify(pipeline)(response.body, createWriteStream(downloadFilePath));
		await $`magick ${downloadFilePath} -resize 2048x\\> -resize x1280\\> ${downloadFilePath}`;
	}

	const result = await $`magick identify -ping -format '%w:%h' ${downloadFilePath}`;
	const [width, height] = result.stdout.split(':');
	return {
		filename: image.filename,
		height: parseInt(height, 10),
		id: image.id,
		pathInAssets,
		type: image.type,
		width: parseInt(width, 10)
	};
}

async function downloadImage(image: Attachment): Promise<Image> {
	await mkdir(`${assetPath}/${image.id}`, { recursive: true });
	const pathInAssets = `${image.id}/${image.filename}`;
	return await fetchOrReuseCache({ pathInAssets, image });
}

async function getDataFromAirtable<T, TFields extends FieldSet = FieldSet>({
	base,
	flatMapRecord,
	selectOptions,
	sheetName
}: {
	base: AirtableBase;
	flatMapRecord: (record: Record<TFields>) => Promise<T[]>;
	selectOptions: QueryParams<TFields>;
	sheetName: string;
}): Promise<T[]> {
	let data: T[] = [];
	console.log('checking sheet', sheetName);
	await (base(sheetName) as Table<TFields>)
		.select(selectOptions)
		.eachPage(async (records, fetchNextPage) => {
			console.log('got some records in', sheetName, ' -> ', records.length);
			for await (const record of records) {
				const results = await flatMapRecord(record);
				data = [...data, ...results];
			}
			fetchNextPage();
		});
	return data;
}

async function getActsFromAirtable(base: AirtableBase): Promise<SprechAktAct[]> {
	return getDataFromAirtable<SprechAktAct>({
		base,
		sheetName: 'Acts',
		selectOptions: {
			view: 'database',
			fields: [
				'Name',
				'Bio',
				'Facebook',
				'Homepage',
				'Image',
				'Instagram',
				'Twitter',
				'UserType',
				'YouTube'
			]
		},
		flatMapRecord: async (record) => {
			const imageFromDb = record.get('Image') as readonly Attachment[] | undefined;
			const imageToUse = imageFromDb && imageFromDb.length > 0 ? imageFromDb[0] : undefined;
			const image = imageToUse ? await downloadImage(imageToUse) : undefined;
			return [
				{
					id: record.getId(),
					name: (record.get('Name') ?? '') as string,
					bio: (record.get('Bio') ?? '') as string,
					facebook: record.get('Facebook') as string,
					homepage: record.get('Homepage') as string,
					image,
					instagram: record.get('Instagram') as string,
					twitter: record.get('Twitter') as string,
					userTypes: (record.get('UserType') as string[] | undefined)?.map((x) => {
						return x.toLowerCase();
					}) as ('feature' | 'poet' | 'team')[],
					youTube: record.get('YouTube') as string
				}
			];
		}
	});
}

async function getBlogFromAirtable(base: AirtableBase): Promise<SprechAktBlog[]> {
	return getDataFromAirtable({
		base,
		sheetName: 'Blog',
		selectOptions: {
			view: 'database',
			fields: ['Authors', 'AuthorFallback', 'Body', 'ShortDescription', 'Status', 'Title', 'Date']
		},
		flatMapRecord: async (record) => {
			console.log('status =', record.get('Status'));
			const status = record.get('Status') as string | undefined;
			const includeBlogPost = includeDrafts || status === 'Public';
			return includeBlogPost
				? [
						{
							id: record.getId(),
							authors: record.get('Authors') as string[],
							authorFallback: record.get('AuthorFallback') as string | undefined,
							body: record.get('Body') as string,
							date: record.get('Date')?.toLocaleString() as string,
							shortDescription: record.get('ShortDescription') as string,
							status: status ?? 'Entwurf',
							title: record.get('Title') as string
						}
				  ]
				: [];
		}
	});
}

async function getSlamsFromAirtable(base: AirtableBase): Promise<SprechAktEvent[]> {
	return getDataFromAirtable({
		base,
		sheetName: 'Slams',
		selectOptions: {
			view: 'database',
			fields: ['Name', 'ShortDescription', 'Description', 'Date', 'Images', 'Status']
		},
		flatMapRecord: async (record) => {
			const imageFromDb = (record.get('Images') as readonly Attachment[] | undefined) ?? [];
			const images = await Promise.all(imageFromDb.map(downloadImage));
			const status = record.get('Status') as string | undefined;
			const isPublic = status === 'Public';
			return isPublic
				? [
						{
							id: record.getId(),
							date: record.get('Date')?.toLocaleString() as string,
							name: record.get('Name')?.toLocaleString() as string,
							images,
							description: record.get('Description')?.toLocaleString(),
							shortDescription: record.get('ShortDescription')?.toLocaleString()
						}
				  ]
				: [];
		}
	});
}

async function getGalleriesFromAirtable(base: AirtableBase): Promise<SprechAktImage[]> {
	return getDataFromAirtable({
		base,
		sheetName: 'Galleries',
		selectOptions: {
			view: 'database',
			fields: ['Title', 'Route', 'Alt', 'Credits', 'Acts', 'Images']
		},
		flatMapRecord: async (record) => {
			const imageFromDb = (record.get('Images') as readonly Attachment[] | undefined) ?? [];
			const images = await Promise.all(imageFromDb.map(downloadImage));
			const hasImages = images.length > 0;
			const route = record.get('Route')?.toLocaleString();
			return route && hasImages
				? [
						{
							id: record.getId(),
							acts: record.get('Acts')?.toLocaleString() as string,
							alt: record.get('Alt')?.toLocaleString() as string,
							credits: record.get('Credits')?.toLocaleString() as string,
							images,
							route,
							title: record.get('Title')?.toLocaleString() as string
						}
				  ]
				: [];
		}
	});
}
