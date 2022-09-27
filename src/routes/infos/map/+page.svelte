<script>
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import imageUrl from './directions.jpg';
	import map from './map.jpg';
</script>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Anfahrt" {imageUrl} />

	<p>
		Die Alte Kaserne, das Jugendkulturzentrum der Stadt Landshut, ist die Heimat des SprechAkt
		Poetry Slams.
	</p>

	<img src={map} alt="Übersichtskarte für den Weg zur alten Kaserne" />

	<h2>Mit dem ÖPNV - Haltestelle Alte Kaserne</h2>

	<h3>Vom Landshuter Hauptbahnhof:</h3>
	<ul>
		<li>Linie 3 (Richtung: Auloh)</li>
		<li>
			Linie 6 (Richtung: Auwaldsiedlung) - <strong
				>Achtung: andere Haltestelle Konrad-Adenauer-Str.</strong
			>
		</li>
	</ul>

	<h3>Von der Altstadt:</h3>
	<ul>
		<li>Linie 3 (Richtung: Auloh)</li>
		<li>Linie 5 (Richtung: Alte Kaserne)</li>
		<li>Linie 14 (Richtung: Wolfsteinerau)</li>
	</ul>
</PageWithNavigation>
