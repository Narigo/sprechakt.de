import blogDb from '$data/blog.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const id = params.id;
	const entryIndex = blogDb.findIndex((post) => post.id === id);
	const entry = blogDb[entryIndex];
	const isLastEntry = entryIndex === blogDb.length - 1;
	const isFirstEntry = entryIndex === 0;
	const nextEntry = !isLastEntry ? blogDb[entryIndex + 1] : undefined;
	const previousEntry = !isFirstEntry ? blogDb[entryIndex - 1] : undefined;

	return { entry, nextEntry, previousEntry };
};
