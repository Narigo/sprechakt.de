<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import blogDb from '$data/blog.json';
	import { getActNameById } from '$lib/common/acts';
	import { base } from '$app/paths';
	import { afterUpdate } from 'svelte';
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
		<h1 slot="header">
			{entry.title}
		</h1>
		<article>
			<p>geschrieben von {entry.authors.map((id) => getActNameById(id)).join(', ')}</p>
			<SvelteMarkdown source={entry.body} />
		</article>

		<nav>
			{#if previousEntry}
				<a href="{base}/posts/{previousEntry.id}">👈 {previousEntry.title}</a>
			{/if}
			<a href="{base}/posts">Zu den weiteren Nachrichten</a>
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
