<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getEventsById } from '$lib/getNextEvents';

	const id = $page.params.id;
	const dates = getEventsById();
	const event = dates[id];
</script>

<section>
	<h3>{event.date}</h3>
	<p>{event.description}</p>
	{#if event.extras}
		<p>{event.extras}</p>
	{/if}
</section>
