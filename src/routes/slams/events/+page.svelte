<script lang="ts">
	import { isUpcomingEvent } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import dropWhile from '$lib/common/dropWhile';
	import takeWhile from '$lib/common/takeWhile';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './events.svg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';

	const upcomingEvents = takeWhile(slamsDb, isUpcomingEvent);
	upcomingEvents.reverse();
	const pastEvents = dropWhile(slamsDb, isUpcomingEvent);

	console.log({ pastEvents, upcomingEvents });
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Vergangene Poetry Slam Events des SprechAkts" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Unsere Termine" {imageUrl} />

	<div>
		<section>
			<p>
				Der SprechAkt findet regelmäßig alle zwei Monate donnerstags in der Alten Kaserne statt.
				Daneben gibt es ab und zu Lesungen und Themenslams in anderen Locations wie Bücher Pustet
				oder der VHS Moosburg.
			</p>
		</section>

		<section>
			<h2>Anstehende Termine</h2>
			<EventSection events={upcomingEvents} />
		</section>

		<section>
			<h2>Frühere Termine</h2>
			<EventSection events={pastEvents} />
		</section>
	</div>
</PageWithNavigation>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}
	section > :first-child {
		margin-top: 0;
	}
	section > :last-child {
		margin-bottom: 0;
	}
</style>
