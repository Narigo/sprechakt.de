import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import Airtable from 'airtable';
import type { Attachment } from 'airtable';

const apiKey = process.env.AIRTABLE_API_KEY;
const apiBase = process.env.AIRTABLE_API_BASE as string;
const dirname = path.dirname(fileURLToPath(import.meta.url));

run()
	.then(() => {
		console.log('done!');
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

type Slam = {
	id: string;
	name: string;
	date: Date;
	shortDescription: string;
	description: string;
	images: Attachment[];
};

async function run() {
	const db = await getSlamsFromAirtable();
	await writeFile(path.resolve(dirname, '../../src/routes/slams/index.json'), JSON.stringify(db));
}

async function getSlamsFromAirtable() {
	const base = new Airtable({ apiKey }).base(apiBase);
	let slams: Slam[] = [];
	return new Promise((resolve, reject) => {
		base('Slams')
			.select({
				view: 'database',
				fields: ['Name', 'ShortDescription', 'Description', 'Date', 'Images']
			})
			.eachPage(
				(records, fetchNextPage) => {
					slams = [
						...slams,
						...records.map((record) => {
							const images = record.get('images') as Attachment[];
							return {
								id: record.getId(),
								date: new Date(record.get('Date') as string),
								name: record.get('Name') as string,
								images,
								description: record.get('Description') as string,
								shortDescription: record.get('ShortDescription') as string
							};
						})
					];
					fetchNextPage();
				},
				(err) => {
					if (err) {
						return reject(err);
					}
					return resolve(slams);
				}
			);
	});
}
