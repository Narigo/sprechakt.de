<script lang="ts">
	import { base } from '$app/paths';
	import type { SprechAktBlog } from '$lib/types';

	export let posts: SprechAktBlog[];
</script>

<section>
	{#each posts as post}
		<a href={`${base}/posts/${post.id}`}
			><div>
				<h3>{post.title}</h3>
				{#if post.shortDescription}
					<p>{post.shortDescription}</p>
				{:else}
					<p>Ein weiterer Beitrag</p>
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
