<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import blogDb from '$data/blog.json';
	import { getActNameById } from '$lib/common/acts';
	import { base } from '$app/paths';

	const { id } = $page.params;
	const entryIndex = blogDb.findIndex((post) => post.id === id);
	const entry = blogDb[entryIndex];
	const isLastEntry = entryIndex === blogDb.length - 1;
	const isFirstEntry = entryIndex === 0;
	const nextEntry = !isLastEntry ? blogDb[entryIndex + 1] : undefined;
	const previousEntry = !isFirstEntry ? blogDb[entryIndex - 1] : undefined;
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
