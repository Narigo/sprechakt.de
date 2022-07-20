<script lang="ts">
	import { page } from '$app/stores';
	import { getEventsById } from '$lib/events';
	import events from './index.json';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<section>
	<h3>{event.date}</h3>
	<p>{event.description}</p>
	{#if event.extras}
		<p>{event.extras}</p>
	{/if}
</section>
