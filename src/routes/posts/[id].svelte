<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import blogDb from '$data/blog.json';
	import { getActNameById } from '$lib/common/acts';
	import { base } from '$app/paths';
	import { afterUpdate } from 'svelte';
	import type { SprechaktBlog } from '$lib/types';

	let id: string;
	let entryIndex: number;
	let entry: SprechaktBlog;
	let isLastEntry: boolean;
	let isFirstEntry: boolean;
	let nextEntry: SprechaktBlog | undefined;
	let previousEntry: SprechaktBlog | undefined;

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

		{#if previousEntry}
			<a href="{base}/posts/{previousEntry.id}">👈 {previousEntry.title}</a>
		{/if}
		<a href="{base}/posts">Zu den weiteren Nachrichten</a>
		{#if nextEntry}
			<a href="{base}/posts/{nextEntry.id}">{nextEntry.title} 👉</a>
		{/if}
	</PageWithNavigation>
{/if}
