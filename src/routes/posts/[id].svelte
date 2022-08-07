<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import blogDb from '$data/blog.json';
	import { getActNameById } from '$lib/common/acts';

	const { id } = $page.params;
	const entry = blogDb.find((post) => post.id === id);
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

		<a href="..">Zurück</a>
	</PageWithNavigation>
{/if}
