<script lang="ts">
	import { base } from '$app/paths';
	import { getDate } from '$lib/common/events';
	import WideCard from '$lib/layout/WideCard.svelte';
	import type { SprechAktEvent } from '$lib/types';

	export let events: SprechAktEvent[];
</script>

<section>
	{#each events as event}
		<a href={`${base}/slams/events/${event.id}`}
			><WideCard>
				<h3>{event.name} am {getDate(event)}</h3>
				{#if event.shortDescription}
					<p>{event.shortDescription}</p>
				{:else}
					<p>Ein weiterer Slam</p>
				{/if}
			</WideCard></a
		>
	{:else}
		<p>
			Es gibt momentan keine anstehenden Termine? Das sollte sich bald wieder ändern! Nervt uns auf
			unseren Social Media Kanälen, damit wir schnell die nächsten Termine auf unsere Homepage
			stellen!
		</p>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	a {
		color: var(--text-color);
		text-decoration: none;
	}
	a:hover {
		--background-color: var(--secondary-color);
	}

	h3 {
		font-family: var(--font-subheading);
	}

	h3,
	p {
		margin: 0;
	}
</style>
