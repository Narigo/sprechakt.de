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
	<div class="content-layout">
		<div class="content">
			<slot />
		</div>
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
	</div>
	<slot name="footer" />
</PageWithNavigation>

<style>
	.content-layout {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.content {
		flex: 1;
	}
</style>
