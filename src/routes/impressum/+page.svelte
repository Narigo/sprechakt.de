<script lang="ts">
	import { base } from '$app/paths';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>SprechAkt Impressum</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<h1 slot="header">Impressum</h1>
	<div>
		<strong>SprechAkt Landshut</strong><br />
		c/o Sebastian Geiger<br />
		Füttererstr. 53<br />
		84032 Landshut<br />
		E-Mailadresse: <a href="mailto:sprechakt.landshut@gmx.de">sprechakt.landshut@gmx.de</a>
	</div>
</PageWithNavigation>
