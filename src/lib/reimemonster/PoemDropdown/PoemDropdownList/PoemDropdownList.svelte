<script lang="ts">
	import type { Poem } from '../../poem.store';
	import { poems } from '../../poem.store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function selectPoem(poem: Poem) {
		dispatch('select', poem);
	}

	function removePoem(poem: Poem) {
		dispatch('remove', poem);
	}
</script>

<ul>
	{#each $poems as poem}
		<li>
			<button type="button" on:click={() => selectPoem(poem)}>{poem.title}</button>
			<button type="button" on:click={() => removePoem(poem)}>Delete</button>
		</li>
	{:else}
		<li>Keine gespeicherten Gedichte gefunden!</li>
	{/each}
</ul>

<style>
	ul {
		background-color: var(--background-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 1em;
		position: absolute;
		left: 0;
		right: 0;
		top: 2em;
		z-index: 1;
	}
</style>
