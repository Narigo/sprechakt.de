<script lang="ts">
	import { page } from '$app/stores';
	import { getEventsById } from '$lib/common/events';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import events from './index.json';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<PageWithNavigation>
	<h1 slot="header">Slams</h1>
	<section>
		<h3>{event.date}</h3>
		<p>{event.description}</p>
	</section>
</PageWithNavigation>
