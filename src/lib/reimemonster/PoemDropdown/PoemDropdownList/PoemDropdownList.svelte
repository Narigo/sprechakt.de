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
			<span>{poem.title}</span>
			<span
				><button class="select" type="button" on:click={() => selectPoem(poem)}>Laden</button>
				<button class="delete" type="button" on:click={() => removePoem(poem)}>Löschen</button
				></span
			>
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
	li {
		display: flex;
		justify-content: space-between;
		gap: 1em;
	}
</style>
