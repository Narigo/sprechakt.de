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
	<p>Die Inhalte sind derzeit noch im Aufbau. Vorübergehend verantwortlich für die Inhalte:</p>
	<div><strong>Jörn Bernhardt</strong><br />Goethestr. 46<br />84032 Landshut</div>
</PageWithNavigation>
