import path from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import Airtable from 'airtable';
import type { Attachment } from 'airtable';
import type { AirtableBase } from 'airtable/lib/airtable_base';
import type { FieldSet } from 'airtable/lib/field_set';
import type Record from 'airtable/lib/record';
import type { QueryParams } from 'airtable/lib/query_params';
import type Table from 'airtable/lib/table';
import type { SprechaktAct, SprechaktEvent, SprechaktBlog } from '../../src/lib/types';

const apiKey = process.env.AIRTABLE_API_KEY as string;
const apiBase = process.env.AIRTABLE_API_BASE as string;
const dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDirectory = path.resolve(dirname, '../../database');

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
	const [slamDb, blogDb, actsDb] = await Promise.all([
		getSlamsFromAirtable(base),
		getBlogFromAirtable(base),
		getActsFromAirtable(base)
	]);
	await Promise.all([
		writeFile(path.resolve(dirname, `${dbDirectory}/acts.json`), JSON.stringify(actsDb)),
		writeFile(path.resolve(dirname, `${dbDirectory}/blog.json`), JSON.stringify(blogDb)),
		writeFile(path.resolve(dirname, `${dbDirectory}/slams.json`), JSON.stringify(slamDb))
	]);
}

async function getDataFromAirtable<T, TFields extends FieldSet = FieldSet>({
	base,
	flatMapRecord,
	selectOptions,
	sheetName
}: {
	base: AirtableBase;
	flatMapRecord: (record: Record<TFields>) => T[];
	selectOptions: QueryParams<TFields>;
	sheetName: string;
}): Promise<T[]> {
	let data: T[] = [];
	console.log('checking sheet', sheetName);
	return new Promise((resolve, reject) => {
		(base(sheetName) as Table<TFields>).select(selectOptions).eachPage(
			(records, fetchNextPage) => {
				console.log('got some records in', sheetName, ' -> ', records.length);
				data = [...data, ...records.flatMap(flatMapRecord)];
				fetchNextPage();
			},
			(err) => {
				if (err) {
					return reject(err);
				}
				return resolve(data);
			}
		);
	});
}

async function getActsFromAirtable(base: AirtableBase): Promise<SprechaktAct[]> {
	return getDataFromAirtable<SprechaktAct>({
		base,
		sheetName: 'Acts',
		selectOptions: {
			view: 'database',
			fields: ['Name', 'Bio', 'Image', 'Instagram', 'Twitter', 'YouTube']
		},
		flatMapRecord: (record) => {
			const imageFromDb = record.get('Image') as readonly Attachment[] | undefined;
			const image = imageFromDb && imageFromDb.length > 0 ? imageFromDb[0] : undefined;
			return [
				{
					id: record.getId(),
					name: record.get('Name') as string,
					bio: record.get('Bio') as string,
					image,
					instagram: record.get('Instagram') as string,
					twitter: record.get('Twitter') as string,
					youTube: record.get('YouTube') as string
				}
			];
		}
	});
}

async function getBlogFromAirtable(base: AirtableBase): Promise<SprechaktBlog[]> {
	return getDataFromAirtable({
		base,
		sheetName: 'Blog',
		selectOptions: {
			view: 'database',
			fields: ['Authors', 'Body', 'ShortDescription', 'Status', 'Title']
		},
		flatMapRecord: (record) => {
			console.log('status =', record.get('Status'));
			const status = record.get('Status') as string | undefined;
			const isPublic = status === 'Public';
			return isPublic
				? [
						{
							id: record.getId(),
							author: record.get('Authors') as string,
							body: record.get('Body') as string,
							shortDescription: record.get('ShortDescription') as string,
							status,
							title: record.get('Title') as string
						}
				  ]
				: [];
		}
	});
}

async function getSlamsFromAirtable(base: AirtableBase): Promise<SprechaktEvent[]> {
	return getDataFromAirtable({
		base,
		sheetName: 'Slams',
		selectOptions: {
			view: 'database',
			fields: ['Name', 'ShortDescription', 'Description', 'Date', 'Images']
		},
		flatMapRecord: (record) => {
			return [
				{
					id: record.getId(),
					date: record.get('Date') as string,
					name: record.get('Name') as string,
					images: record.get('Images') as readonly Attachment[],
					description: record.get('Description') as string,
					shortDescription: record.get('ShortDescription') as string
				}
			];
		}
	});
}
