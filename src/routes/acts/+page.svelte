<script lang="ts">
	import dataActs from '$data/acts.json';
	import ActCard from '$lib/acts/ActCard.svelte';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import type { SprechAktAct } from '$lib/types';
	import imageUrl from './acts.jpg';

	const acts = (dataActs as SprechAktAct[]).filter(
		(act) => act.userTypes?.includes('poet') || act.userTypes?.includes('feature')
	);
</script>

<svelte:head>
	<title>Poet:Innen</title>
	<meta
		name="description"
		content="Poet:Innen der vergangenen Slams, sofern sie aufgelistet werden möchten"
	/>
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Poet:Innen" {imageUrl} />

	<p>Diese Poetry Slammer:Innen sind unter anderem bereits beim SprechAkt aufgetreten:</p>

	<h2>Von A bis Z</h2>
	<ul>
		{#each acts as act}
			<li><ActCard {act} /></li>
		{/each}
	</ul>
</PageWithNavigation>

<style>
	ul {
		align-items: flex-end;
		display: flex;
		flex-wrap: wrap;
		gap: 5em;
		justify-content: center;
	}
	li {
		box-shadow: 0 0 5em -2em #000;
		list-style: none;
	}
</style>
