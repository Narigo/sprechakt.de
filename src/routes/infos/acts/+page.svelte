<script lang="ts">
	import { base } from '$app/paths';
	import acts from '$data/acts.json';
	import PageWithInfoNav from '$lib/infos/PageWithInfoNav.svelte';
</script>

<svelte:head>
	<title>Künstler:innen</title>
	<meta
		name="description"
		content="Künstler:innen der vergangenen Slams, sofern sie aufgelistet werden möchten"
	/>
</svelte:head>

<PageWithInfoNav>
	<h1 slot="header">Künstler:innen</h1>
	<p>
		Beim SprechAkt in Landshut sind schon einige Künstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.
	</p>
	<ul>
		{#each acts as act}
			<li><a href="{base}/infos/acts/{act.id}">{act.name}</a></li>
		{/each}
	</ul>
	<h2>Wie funktioniert das hier?</h2>
	<p>
		Wie melde ich mich als Künstler:in an? Wann muss ich da sein? Was muss ich bei längerer Anreise
		beachten? Was erwartet mich? Bis wann muss ich mich anmelden?
	</p>
</PageWithInfoNav>
