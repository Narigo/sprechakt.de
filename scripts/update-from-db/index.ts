import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

run()
	.then(() => {
		console.log('done!');
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

async function run() {
	const db = JSON.parse((await readFile(path.resolve(dirname, 'db.json'))).toString());
	await writeFile(path.resolve(dirname, '../../src/routes/slams/index.json'), JSON.stringify(db));
}
