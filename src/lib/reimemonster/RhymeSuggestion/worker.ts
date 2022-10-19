import { findRhyme } from 'reimemonster';

self.addEventListener(
	'message',
	(message) => {
		const word = message.data;
		const rhymes = findRhyme(word);
		const result = { word, rhymes };
		self.postMessage(JSON.stringify(result));
	},
	false
);
