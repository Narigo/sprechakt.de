<script>
	import Map from '$lib/infos/Map.svelte';
	import PageWithInfoNav from '$lib/infos/PageWithInfoNav.svelte';
</script>

<PageWithInfoNav>
	<h1 slot="header">Anfahrt</h1>
	<p>
		Hier folgt eine Karte zum einfachen Finden des Poetry Slams. Und eine Beschreibung, wie man mit
		den öffentlichen Verkehrsmitteln gut hin kommt.
	</p>
	<Map />
</PageWithInfoNav>
