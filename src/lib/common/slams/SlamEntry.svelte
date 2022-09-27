<script lang="ts">
	import { base } from '$app/paths';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';

	import type { Attachment } from 'airtable/lib/attachment';
	import SvelteMarkdown from 'svelte-markdown';

	export let backLink: string | undefined;
	export let markdownContent: string | undefined;
	export let images: readonly Attachment[] | undefined = [];
	export let title: string | undefined;
</script>

<section>
	<h3>{title}</h3>
	<div>
		<slot name="content">
			{#if markdownContent}<SvelteMarkdown
					source={markdownContent}
					options={{ baseUrl: base, gfm: true }}
				/>{/if}
		</slot>
	</div>
	{#if images}<ImageGrid images={images.map((i) => ({ url: i.url, alt: i.filename }))} />{/if}
	{#if backLink}<a href={backLink}>Zurück</a>{/if}
</section>

<style>
	h3 {
		margin: 0;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	div > :global(:first-child) {
		margin-top: 0;
	}

	div > :global(:last-child) {
		margin-bottom: 0;
	}
</style>
