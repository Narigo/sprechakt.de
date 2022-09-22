<script lang="ts">
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import blogDb from '$data/blog.json';
	import { base } from '$app/paths';
	import { afterUpdate } from 'svelte';
	import BlogEntry from '$lib/posts/BlogEntry.svelte';
	import type { SprechAktBlog } from '$lib/types';

	let id: string;
	let entryIndex: number;
	let entry: SprechAktBlog;
	let isLastEntry: boolean;
	let isFirstEntry: boolean;
	let nextEntry: SprechAktBlog | undefined;
	let previousEntry: SprechAktBlog | undefined;

	initValues();
	afterUpdate(initValues);

	function initValues() {
		id = $page.params.id;
		entryIndex = blogDb.findIndex((post) => post.id === id);
		entry = blogDb[entryIndex];
		isLastEntry = entryIndex === blogDb.length - 1;
		isFirstEntry = entryIndex === 0;
		nextEntry = !isLastEntry ? blogDb[entryIndex + 1] : undefined;
		previousEntry = !isFirstEntry ? blogDb[entryIndex - 1] : undefined;
	}
</script>

{#if entry}
	<PageWithNavigation>
		<BlogEntry {entry} />

		<nav>
			{#if previousEntry}
				<a href="{base}/posts/{previousEntry.id}">👈 {previousEntry.title}</a>
			{/if}
			<a href="{base}/posts">Zu den weiteren Meldungen</a>
			{#if nextEntry}
				<a href="{base}/posts/{nextEntry.id}">{nextEntry.title} 👉</a>
			{/if}
		</nav>
	</PageWithNavigation>
{/if}

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
