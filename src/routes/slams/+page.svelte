<script lang="ts">
	import { base } from '$app/paths';
	import { getDate, getNextEvents, isPastEvent } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import dropWhile from '$lib/common/dropWhile';
	import takeWhile from '$lib/common/takeWhile';
	import NextEventHeader from '$lib/common/slams/NextEventHeader.svelte';

	const upcomingEvents = dropWhile(slamsDb, isPastEvent);
	const pastEvents = takeWhile(slamsDb, isPastEvent);
	const events = getNextEvents(slamsDb);
	const nextEvent = events[0];
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Die nächsten Poetry Slam Events vom SprechAkt" />
</svelte:head>

<PageWithNavigation>
	<NextEventHeader date={getDate(nextEvent)} link={`${base}/slams/${nextEvent.id}`} slot="header" />

	<section class="content">
		<div>
			<h2>Anstehende Termine:</h2>
			<EventSection events={upcomingEvents} />
		</div>

		<div>
			<h2>Frühere Slams:</h2>
			<EventSection events={pastEvents} />
		</div>
	</section>
</PageWithNavigation>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
