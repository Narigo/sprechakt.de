<script lang="ts">
	import { onMount } from 'svelte';
	import { wordRhymeStore } from '../poem.store';
	import LoadingIpsum from '../LoadingIpsum/LoadingIpsum.svelte';
	import SuggestionWorker from './worker.ts?worker';

	export let word = '';

	let isLoading = false;
	let suggestedWords: string[] | null = null;

	let backgroundWorker: Worker | null = null;
	const timeToWait = 750;
	let timer: ReturnType<typeof setTimeout>;
	let debouncedPost: (word: string) => void = (word) => {
		const normalizedWord = word.toLowerCase();
		if ($wordRhymeStore[normalizedWord] === undefined) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				isLoading = true;
				backgroundWorker?.postMessage(normalizedWord);
			}, timeToWait);
		} else {
			suggestedWords = $wordRhymeStore[normalizedWord];
		}
	};

	$: {
		if (word !== '') {
			debouncedPost(word);
		}
	}

	onMount(() => {
		const workerListener = (event: MessageEvent<string>) => {
			const data = JSON.parse(event.data);
			$wordRhymeStore[data.word] = data.rhymes;
			suggestedWords = $wordRhymeStore[word];
			isLoading = false;
		};

		backgroundWorker = new SuggestionWorker();
		backgroundWorker.addEventListener('message', workerListener);

		return () => {
			backgroundWorker?.removeEventListener('message', workerListener);
		};
	});
</script>

<h3>{word}</h3>
<div>
	{#if isLoading}
		<LoadingIpsum />
	{:else if suggestedWords}
		<ul>
			{#each suggestedWords as suggestion}
				<li>{suggestion}</li>
			{:else}
				<li>Keine Wortvorschläge gefunden!</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
