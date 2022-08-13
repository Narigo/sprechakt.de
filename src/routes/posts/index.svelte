<script lang="ts">
	import blogDb from '$data/blog.json';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import BlogSection from '$lib/index/BlogSection.svelte';

	const posts = blogDb;
</script>

<svelte:head>
	<title>Sprechakt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<div class="header" slot="header">
		<h1>Nachrichten rund um den Sprechakt</h1>
	</div>

	<BlogSection {posts} />
</PageWithNavigation>

<style>
	.header {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	h1 {
		width: 100%;
	}
</style>
