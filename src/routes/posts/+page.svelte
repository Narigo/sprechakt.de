<script lang="ts">
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import BlogSection from '$lib/index/BlogSection.svelte';
	import BlogEntry from '$lib/posts/BlogEntry.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from '$lib/posts/aktuelles.jpg';
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
	<BlogEntry {entry} />

	<h2>Blog-Archiv</h2>
	<BlogSection {posts} />
</PageWithNavigation>
