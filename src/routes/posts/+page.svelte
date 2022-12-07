<script lang="ts">
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import BlogSection from '$lib/index/BlogSection.svelte';
	import BlogEntry from '$lib/posts/BlogEntry.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './aktuelles.svg';
	import type { PageData } from './$types';

	export let data: PageData;
	const { posts, entry } = data;
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Aktuelles" {imageUrl} />
	<div>
		<section>
			<BlogEntry {entry} />
		</section>

		<section>
			<h2>Blog-Archiv</h2>
			<BlogSection {posts} />
		</section>
	</div>
</PageWithNavigation>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
	section > :global(:first-child) {
		margin-top: 0;
	}
	section > :global(:last-child) {
		margin-bottom: 0;
	}
</style>
