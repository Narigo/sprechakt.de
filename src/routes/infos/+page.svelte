<script>
	import { base } from '$app/paths';
	import PageWithInfoNav from '$lib/infos/PageWithInfoNav.svelte';
</script>

<PageWithInfoNav>
	<h1 slot="header">Informationen rund um den SprechAkt</h1>
	<p>Hier gibt es weitere Informationen für die interessierte Leserschaft:</p>
	<ul>
		<li><a href="{base}/infos/visitors">für Besucher:innen</a></li>
		<li><a href="{base}/infos/acts">für Künstler:innen</a></li>
		<li><a href="{base}/infos/coops">unsere Kooperationen</a></li>
		<li><a href="{base}/infos/map">Anfahrt</a></li>
	</ul>
</PageWithInfoNav>
