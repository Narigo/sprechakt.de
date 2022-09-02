<script lang="ts">
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import acts from '$data/acts.json';
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
	<ul>
		{#each acts as act}
			<li>{act.name}</li>
		{/each}
	</ul>
</PageWithNavigation>
