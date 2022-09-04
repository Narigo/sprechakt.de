<script lang="ts">
	import { isPastEvent } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import takeWhile from '$lib/common/takeWhile';
	import PageWithSlamNav from '$lib/slams/PageWithSlamNav.svelte';

	const pastEvents = takeWhile(slamsDb, isPastEvent);
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Vergangene Poetry Slam Events des SprechAkts" />
</svelte:head>

<PageWithSlamNav>
	<h1 slot="header">Frühere Slams</h1>

	<EventSection events={pastEvents} />
</PageWithSlamNav>
