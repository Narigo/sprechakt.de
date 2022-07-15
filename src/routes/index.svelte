<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import getNextDates from '$lib/getNextDates';
import EventSection from '$lib/index/EventSection.svelte';
	const dates = getNextDates();
	const nextDate = dates[0];
</script>

<svelte:head>
	<title>Sprechakt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<section>
	<h1>Sprechakt</h1>
	<p>
		Nächster Termin am {nextDate.date}.
		<a href={`${base}/event/${nextDate.id}`}>Mehr Informationen zum nächsten Event</a>
	</p>
</section>

<EventSection />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
