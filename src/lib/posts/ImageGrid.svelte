<script lang="ts">
	import type { Attachment } from 'airtable/lib/attachment';
	import { writable } from 'svelte/store';

	export let images: readonly Attachment[];
	let selectedImage = writable<Attachment | null>(null);
</script>

<section>
	{#each images as image}
		{#if $selectedImage === image}
			<div class="selected">
				<button
					type="button"
					on:click={(e) => {
						e.preventDefault();
						$selectedImage = null;
					}}>X</button
				>
				<img src={image.url} alt="Eindruck vom Event" />
			</div>
		{:else}
			<div>
				<button
					type="button"
					on:click={(e) => {
						e.preventDefault();
						$selectedImage = image;
					}}
				>
					<img src={image.url} alt="Eindruck vom Event" />
				</button>
			</div>
		{/if}
	{/each}
</section>

<style>
	section {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: space-between;
	}

	img {
		box-shadow: 0 0 2em -1em #000;
		max-height: calc(100% - 2em);
		max-width: calc(100% - 2em);
		margin: 0;
		padding: 0;
	}

	button {
		background: none;
		border: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}
	div:not(.selected) {
		max-width: calc(33% - 2em);
	}
	.selected {
		background-color: rgba(0, 0, 0, 0.8);
		box-shadow: 0 0 4em -1em var(--primary-color);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		max-width: unset;
	}
	.selected button {
		position: absolute;
		top: 2em;
		right: 2em;
		background: var(--text);
		border: 0;
		min-height: 4em;
		min-width: 4em;
		color: var(--text);
		background: var(--primary-color);
	}
</style>
