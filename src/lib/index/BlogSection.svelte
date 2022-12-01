<script lang="ts">
	import { base } from '$app/paths';
	import WideCard from '$lib/layout/WideCard.svelte';
	import type { SprechAktBlog } from '$lib/types';

	export let posts: SprechAktBlog[];
</script>

<section>
	{#each posts as post}
		<a href={`${base}/posts/${post.id}`}
			><WideCard>
				<h3>{post.title}</h3>
				{#if post.shortDescription}
					<p>{post.shortDescription}</p>
				{:else}
					<p>Ein weiterer Beitrag</p>
				{/if}
			</WideCard></a
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
