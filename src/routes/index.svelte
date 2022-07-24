<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { getNextEvents } from '$lib/common/events';
	import events from './event/index.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';

	const dates = getNextEvents(events);
	const nextDate = dates[0];
</script>

<svelte:head>
	<title>Sprechakt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<h1 slot="header">Sprechakt</h1>
	<section>
		<p>
			Nächster Termin am {nextDate.date}.
			<a href={`${base}/event/${nextDate.id}`}>Mehr Informationen zum nächsten Event</a>
		</p>
	</section>

	<EventSection {events} />
</PageWithNavigation>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
	}
</style>
