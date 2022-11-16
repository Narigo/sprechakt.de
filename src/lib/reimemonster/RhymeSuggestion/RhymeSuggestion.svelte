<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { wordRhymeStore } from '../poem.store';
	import LoadingIpsum from '../LoadingIpsum/LoadingIpsum.svelte';
	import SuggestionWorker from './worker.ts?worker';

	export let word = '';

	let isLoading = false;
	let suggestedWords: Writable<string[]> = writable([]);

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
			$suggestedWords = $wordRhymeStore[normalizedWord];
		}
	};

	$: {
		if (word !== '') {
			debouncedPost(word);
		}
	}

	const dispatch = createEventDispatcher();
	const workerListener = (event: MessageEvent<string>) => {
		const data = JSON.parse(event.data);
		$wordRhymeStore[data.word] = data.rhymes;
		const normalizedWord = word.toLowerCase();
		if (data.word === normalizedWord) {
			$suggestedWords = $wordRhymeStore[data.word];
		}
		isLoading = false;
	};

	onMount(() => {
		backgroundWorker = new SuggestionWorker();
		backgroundWorker.addEventListener('message', workerListener);

		return () => {
			backgroundWorker?.removeEventListener('message', workerListener);
		};
	});
</script>

{#if word}<h3>Reimvorschläge für "{word}"</h3>
	<div>
		{#if isLoading}
			<LoadingIpsum />
		{:else if $suggestedWords}
			<ul>
				{#each $suggestedWords as suggestion}
					<li>
						<button
							on:click={(e) => {
								e.preventDefault();
								dispatch('select', suggestion);
							}}
							type="button">{suggestion}</button
						>
					</li>
				{:else}
					<li>Keine Wortvorschläge gefunden!</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	button {
		border: 0;
		background: none;
		cursor: pointer;
	}

	button:hover {
		text-decoration: underline;
	}
</style>
