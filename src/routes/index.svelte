<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { getDate, getNextEvents } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import EventSection from '$lib/index/EventSection.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';

	const events = getNextEvents(slamsDb);
	const nextEvent = events[0];
</script>

<svelte:head>
	<title>Sprechakt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<div slot="header">
		<h1>Sprechakt</h1>
		<section>
			<p>
				Nächster Termin am {getDate(nextEvent)}.
				<a href={`${base}/slams/${nextEvent.id}`}>Mehr Informationen zum nächsten Event</a>
			</p>
		</section>
	</div>

	<EventSection {events} />
</PageWithNavigation>

<style>
	div {
		background-image: url('$lib/index/sprechakt-bild.svg');
		background-position: right;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

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
