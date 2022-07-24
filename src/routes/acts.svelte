<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>Sprechakt Poeten</title>
	<meta
		name="description"
		content="Poetinnen der vergangenen Slams, sofern sie aufgelistet werden möchten"
	/>
</svelte:head>

<PageWithNavigation>
	<h1 slot="header">Poet:innen</h1>
	<p>
		Beim Sprechakt in Landshut sind schon einige Künstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.
	</p>
</PageWithNavigation>
