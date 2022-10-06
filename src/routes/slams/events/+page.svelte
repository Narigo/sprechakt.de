<script lang="ts">
	import { isPastEvent } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import dropWhile from '$lib/common/dropWhile';
	import takeWhile from '$lib/common/takeWhile';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './events.jpg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';

	const pastEvents = takeWhile(slamsDb, isPastEvent);
	const upcomingEvents = dropWhile(slamsDb, isPastEvent);
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Vergangene Poetry Slam Events des SprechAkts" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Unsere Termine" {imageUrl} />

	<p>
		Der SprechAkt findet regelmäßig alle zwei Monate donnerstags in der Alten Kaserne statt. Daneben
		gibt es ab und zu Lesungen und Themenslams in anderen Locations wie Bücher Pustet oder der VHS
		Moosburg.
	</p>

	<section>
		<h2>Anstehende Termine</h2>
		<EventSection events={upcomingEvents} />
	</section>

	<section>
		<h2>Frühere Termine</h2>
		<EventSection events={pastEvents} />
	</section>
</PageWithNavigation>

<style>
	section {
		margin-bottom: 2em;
	}
</style>
