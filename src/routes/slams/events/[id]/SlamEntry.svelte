<script lang="ts">
	import { assets, base } from '$app/paths';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';
	import type { Image } from '$lib/types';

	import SvelteMarkdown from 'svelte-markdown';

	export let markdownContent: string | undefined;
	export let images: Image[] = [];
	export let title: string | undefined;

	const imageDb = `${assets}/images/from-db`;
</script>

<section>
	<h2>{title}</h2>
	<div>
		<slot name="content">
			{#if markdownContent}<SvelteMarkdown
					source={markdownContent}
					options={{ baseUrl: base, gfm: true }}
				/>{/if}
		</slot>
	</div>
	{#if images.length > 0}<ImageGrid
			images={images.map((i) => ({ url: `${imageDb}/${i.pathInAssets}`, alt: i.filename }))}
		/>{/if}
	<a href="{base}/slams/events">Zurück</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	section > h2 {
		margin: 0;
	}
</style>
