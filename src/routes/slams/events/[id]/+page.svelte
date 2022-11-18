<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getDate, getEventsById } from '$lib/common/events';
	import SlamEntry from '$lib/common/slams/SlamEntry.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import events from '$data/slams.json';
	import imageUrl from '../events.svg';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<svelte:head>
	{#if event}
		<title>{event.name} - SprechAkt</title>
		<meta name="description" content={event.description} />
	{:else}
		<title>Event nicht gefunden - SprechAkt</title>
		<meta name="description" content="Das angegebene Event wurde nicht gefunden" />
	{/if}
</svelte:head>

{#if event}
	<PageWithNavigation>
		<HeaderImage slot="header" alt="Unsere Termine" {imageUrl} />
		<SlamEntry
			title={`${event.name} am ${getDate(event)}`}
			markdownContent={event.description ?? ''}
			images={event.images ?? []}
			backLink="{base}/slams/events"
		/>
	</PageWithNavigation>
{:else}
	<PageWithNavigation>
		<HeaderImage slot="header" alt="Unsere Termine" {imageUrl} />
		Event nicht gefunden!</PageWithNavigation
	>
{/if}

<style>
	h1 {
		max-width: 1024px;
		margin: 0;
		padding: 1em;
	}
</style>
