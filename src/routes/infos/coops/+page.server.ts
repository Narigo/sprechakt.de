import { base } from '$app/paths';
import galleriesDb from '$data/galleries.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
	return {
		images: galleriesDb.filter((entry) => entry.route === `${base}${url.pathname}`)
	};
};
