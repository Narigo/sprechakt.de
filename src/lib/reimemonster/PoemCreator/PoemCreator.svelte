<script lang="ts">
	import PoemTitle from '../PoemTitle/PoemTitle.svelte';
	import { createPoemStore, poems, POEM_CONTEXT_KEY, type Poem } from '../poem.store';
	import RhymeSuggestion from '../RhymeSuggestion/RhymeSuggestion.svelte';
	import PoemDropdownList from './PoemDropdownList.svelte';
	import PoemInput from './PoemInput/PoemInput.svelte';
	import SavePoemButton from './SavePoemButton/SavePoemButton.svelte';
	import { setContext } from 'svelte';

	let open: boolean = false;
	const poemStore = createPoemStore();
	let { lastWordTyped, poem } = poemStore;
	setContext(POEM_CONTEXT_KEY, poemStore);

	function loadPoem(event: CustomEvent<Poem>) {
		$poem = event.detail;
	}

	function removePoem(event: CustomEvent<Poem>) {
		const poem = event.detail;
		const indexOfPoem = $poems.findIndex((p) => p === poem);
		$poems = [...$poems.slice(0, indexOfPoem), ...$poems.slice(indexOfPoem + 1)];
	}

	function savePoem(event: CustomEvent<Poem>) {
		const poem = event.detail;
		$poems = [...$poems, poem];
	}
</script>

<section>
	<div class="dropdown">
		<PoemTitle>
			<div class="title" slot="right">
				<button on:click={() => (open = !open)}>♻️</button>
				<SavePoemButton
					disabled={$poem.text?.trim() === '' || $poem.title?.trim() === ''}
					on:save={savePoem}
				/>
			</div>
		</PoemTitle>
		{#if open}<PoemDropdownList on:select={loadPoem} on:remove={removePoem} />{/if}
	</div>
	<PoemInput />
	<RhymeSuggestion word={$lastWordTyped} />
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2em;
	}

	div.dropdown {
		display: flex;
		flex-direction: column;
	}

	div.title {
		align-items: stretch;
		display: flex;
		flex: 0;
		justify-content: center;
	}

	button {
		--background-color: var(--pure-white);
		align-items: center;
		background: none;
		border: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		flex: 1;
		font: var(--poem-title-font);
		justify-content: center;
		height: 2em;
		width: 2em;
	}
	button:focus {
		border: 2px solid #000;
		outline: none;
	}
</style>
