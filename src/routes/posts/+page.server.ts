import blogDb from '$data/blog.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		posts: blogDb.slice(0, -1),
		entry: blogDb.slice(-1)[0]
	};
};
