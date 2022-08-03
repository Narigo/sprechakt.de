<script lang="ts">
	import { base } from '$app/paths';
	import { getDate } from '$lib/common/events';
	import type { SprechaktEvent } from '$lib/types';

	export let events: SprechaktEvent[];
</script>

<section>
	{#each events as event}
		<a href={`${base}/slams/${event.id}`}
			><div>
				<h3>{getDate(event)}</h3>
				{#if event.shortDescription}
					<p>{event.shortDescription}</p>
				{:else}
					<p>Ein weiterer Slam</p>
				{/if}
			</div></a
		>
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

	div {
		box-shadow: var(--text-color) 0 0 5em -2.5em;
		padding: 2em;
	}

	div:hover {
		background-color: var(--secondary-color);
		box-shadow: var(--text-color) 0 0 2em -1em;
	}

	h3 {
		font-family: var(--font-subheading);
	}

	h3,
	p {
		margin: 0;
	}
</style>
