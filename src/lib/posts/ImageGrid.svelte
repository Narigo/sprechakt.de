<script lang="ts">
	import type { Attachment } from 'airtable/lib/attachment';

	export let images: readonly Attachment[];
</script>

<section>
	{#each images as image}
		<img src={image.url} alt="Eindruck vom Event" />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
	}

	img {
		box-shadow: 0 0 1em -2em #000;
		max-width: 15em;
	}
</style>
