<script lang="ts">
	import { assets } from '$app/paths';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';
	import PageWithNavigation from './PageWithNavigation.svelte';
	import type { SprechAktImage } from '../types';

	export let images: SprechAktImage[];
	const imageDb = `${assets}/images/from-db`;
</script>

<PageWithNavigation>
	<slot slot="navigation" name="navigation" />
	<slot slot="header" name="header" />
	<slot />
	<div />
	<ImageGrid
		images={images.flatMap((i) => {
			return i.images.flatMap((image) => {
				return {
					alt: i.alt,
					credits: i.credits,
					title: i.title,
					url: `${imageDb}/${image.id}/${image.filename}`
				};
			});
		})}
	/>
	<slot name="footer" />
</PageWithNavigation>

<style>
	div {
		height: 1em;
	}
</style>
