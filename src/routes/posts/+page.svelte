<script lang="ts">
	import blogDb from '$data/blog.json';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import BlogSection from '$lib/index/BlogSection.svelte';
	import BlogEntry from '$lib/posts/BlogEntry.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from '$lib/posts/aktuelles.jpg';

	const posts = blogDb.slice(0, -1);
	const entry = blogDb.slice(-1)[0];
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
