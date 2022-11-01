<script lang="ts">
	import { type PoemStore, POEM_CONTEXT_KEY } from '../../poem.store';

	import { createEventDispatcher, getContext } from 'svelte';

	export let disabled: boolean = false;

	const dispatch = createEventDispatcher();
	const { poem } = getContext<PoemStore>(POEM_CONTEXT_KEY);

	function savePoem() {
		dispatch('save', { ...$poem, lastChangeAt: new Date().toISOString() });
	}
</script>

<button type="button" {disabled} on:click={savePoem}><span title="Speichern">+</span></button>

<style>
	button {
		align-items: center;
		background-color: var(--background-color);
		border: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		font: var(--poem-title-font);
		justify-content: center;
		margin: 0;
		padding: 0;
		height: 2em;
		width: 2em;
	}
	button:focus {
		border: 2px solid #000;
		outline: none;
	}
	span {
		width: 2em;
	}
</style>
