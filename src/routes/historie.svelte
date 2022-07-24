<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>Historie</title>
	<meta
		name="description"
		content="Die Geschichte des Sprechakts Landshut und wie es zustande kam."
	/>
</svelte:head>

<PageWithNavigation>
	<h1 slot="header">Geschichte</h1>
	<p>
		Wer hat den Stein ins Rollen gebracht, wann war der erste Auftritt, wie hat sich der Sprechakt
		entwickelt?
	</p>
</PageWithNavigation>
