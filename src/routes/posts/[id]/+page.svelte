<script lang="ts">
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import { base } from '$app/paths';
	import { afterUpdate } from 'svelte';
	import BlogEntry from '$lib/posts/BlogEntry.svelte';
	import type { SprechAktBlog } from '$lib/types';
	import type { PageData } from './$types';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from '../aktuelles.svg';

	let entry: SprechAktBlog;
	let nextEntry: SprechAktBlog | undefined;
	let previousEntry: SprechAktBlog | undefined;

	export let data: PageData;

	initValues();
	afterUpdate(initValues);

	function initValues() {
		entry = data.entry;
		previousEntry = data.previousEntry;
		nextEntry = data.nextEntry;
	}
</script>

{#if entry}
	<PageWithNavigation>
		<HeaderImage slot="header" alt="Aktuelles" {imageUrl} />
		<BlogEntry {entry} />

		<nav>
			{#if previousEntry}
				<a href="{base}/posts/{previousEntry.id}">👈 {previousEntry.title}</a>
			{/if}
			<a href="{base}/posts">Zu den weiteren Meldungen</a>
			{#if nextEntry}
				<a href="{base}/posts/{nextEntry.id}">{nextEntry.title} 👉</a>
			{/if}
		</nav>
	</PageWithNavigation>
{/if}

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
