<script lang="ts">
	import { base } from '$app/paths';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './slammaler.jpg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Malereien" />
</svelte:head>

<PageWithNavigation>
	<div slot="header">
		<HeaderImage alt="Jörn, der Slammaler" position="center" {imageUrl} />
	</div>

	<section>Text folgt...</section>
</PageWithNavigation>
