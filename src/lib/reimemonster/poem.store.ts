import { browser } from '$app/environment';
import { countSyllables } from 'reimemonster';
import type { Readable, Writable } from 'svelte/store';
import { derived, get, writable } from 'svelte/store';

export type Poem = {
	lastChangeAt: string;
	title: string;
	text: string;
};

export type SyllableInfo = { syllables: number; okay: boolean }[];

export type PoemStore = {
	lastWordTyped: Writable<string>;
	poem: Writable<Poem>;
	syllables: Readable<SyllableInfo>;
};

export const POEM_CONTEXT_KEY = 'poem';

export const poems: Writable<Poem[]> = (function () {
	const key = 'poems';
	const internalStore = writable<Poem[]>([]);

	const setter = (value: Poem[]) => {
		if (browser) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
		return internalStore.set(value);
	};

	const subscribe = internalStore.subscribe;

	try {
		if (browser) {
			const initialValue = JSON.parse(window.localStorage.getItem(key) || '[]');
			setter(initialValue);
		}
	} catch {
		// can't parse local storage -> keep empty array
	}

	return {
		set: setter,
		subscribe,
		update(updater) {
			const value = updater(get(internalStore));
			console.log('updated called');
			return setter(value);
		}
	};
})();

export const createPoemStore = (): PoemStore => {
	const lastWordTyped = writable('');
	const poem = writable({ title: '', text: '', lastChangeAt: new Date().toISOString() });
	const syllables = derived(poem, ({ text }) => {
		const acc: { syllables: number; okay: boolean }[] = [];
		let previous = 0;
		text.split(/\n/).forEach((element) => {
			const syllables = countSyllables(element);
			acc.push({ syllables, okay: previous === 0 || previous === syllables });
			previous = syllables;
		});
		return acc;
	});
	return { lastWordTyped, poem, syllables };
};

export const wordRhymeStore = writable<Record<string, string[]>>({});
