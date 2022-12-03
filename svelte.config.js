import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const PREVIEW_PATH = process.env['PREVIEW_PATH'];
const isPreviewMode = PREVIEW_PATH && PREVIEW_PATH !== '';
const base = isPreviewMode ? `/${PREVIEW_PATH}` : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		paths: {
			base
		}
	}
};

export default config;
