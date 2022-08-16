<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getDate, getEventsById } from '$lib/common/events';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import events from '$data/slams.json';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';
	import PageEntry from '$lib/layout/PageEntry.svelte';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<PageEntry
	title={getDate(event)}
	markdownContent={event.description ?? ''}
	images={event.images ?? []}
	backLink=".."
>
	<h1 slot="header">Slams</h1>
</PageEntry>
