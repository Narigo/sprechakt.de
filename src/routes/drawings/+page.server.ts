import galleriesDb from '$data/galleries.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		images: galleriesDb.filter((entry) => entry.route === '/drawings')
	};
};
