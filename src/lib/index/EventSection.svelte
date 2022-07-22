<script lang="ts">
	import { base } from '$app/paths';
	import type { SprechaktEvent } from '$lib/types';

	export let events: SprechaktEvent[];
</script>

<section>
	{#each events as event}
		<a href={`${base}/event/${event.id}`}>
			<h3>{event.date}</h3>
			{#if event.shortDescription}
				<p>{event.shortDescription}</p>
			{/if}
		</a>
	{/each}
</section>
