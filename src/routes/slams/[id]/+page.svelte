<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getDate, getEventsById } from '$lib/common/events';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import events from '$data/slams.json';
	import SlamEntry from '$lib/common/slams/SlamEntry.svelte';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<svelte:head>
	<title>SprechAkt - {event.name}</title>
	<meta name="description" content={event.description} />
</svelte:head>

<PageWithNavigation>
	<h1 slot="header">Slams</h1>
	<SlamEntry
		title={getDate(event)}
		markdownContent={event.description ?? ''}
		images={event.images ?? []}
		backLink="{base}/slams"
	/>
</PageWithNavigation>
