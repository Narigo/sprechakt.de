<script lang="ts">
	import { isPastEvent } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import dropWhile from '$lib/common/dropWhile';
	import takeWhile from '$lib/common/takeWhile';
	import PageWithSlamNav from '$lib/slams/PageWithSlamNav.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './events.jpg';

	const pastEvents = takeWhile(slamsDb, isPastEvent);
	const upcomingEvents = dropWhile(slamsDb, isPastEvent);
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Vergangene Poetry Slam Events des SprechAkts" />
</svelte:head>

<PageWithSlamNav>
	<HeaderImage slot="header" alt="Unsere Termine" {imageUrl} />

	<section>
		<h2>Anstehende Termine</h2>
		<EventSection events={upcomingEvents} />
	</section>

	<section>
		<h2>Frühere Termine</h2>
		<EventSection events={pastEvents} />
	</section>
</PageWithSlamNav>

<style>
	section {
		margin-bottom: 2em;
	}
</style>
