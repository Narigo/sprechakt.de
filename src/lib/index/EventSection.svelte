<script lang="ts">
	import { base } from '$app/paths';
	import { getNextEvents } from '$lib/events';

	const dates = getNextEvents();
</script>

<section>
	{#each dates as event}
		<a href={`${base}/event/${event.id}`}>
			<h3>{event.date}</h3>
			<p>Slam!</p>
		</a>
	{/each}
</section>
