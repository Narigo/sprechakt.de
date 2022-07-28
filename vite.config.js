import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$data: path.resolve('./database'),
			$lib: path.resolve('./src/lib')
		}
	},
	server: {
		fs: {
			allow: ['./database']
		}
	}
};

export default config;
