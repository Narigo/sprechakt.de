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

	<section>
		<p>
			Eine Besonderheit des SprechAkt Slams ist, dass unsere Poet:innen am Ende kleine Kunstwerke zu
			ihren vorgetragenen Texten geschenkt bekommen. Nahezu von Beginn an begleitet eine Stammjury
			den SprechAkt. Ein fester Bestandteil dieses Bewertungsgremiums ist Jörn, der die
			Bewertungstafeln mit Illustrationen dekoriert, die von dem jeweiligen Text inspiriert sind.
			Diese verteilt er anschließend an die Poet:innen. Das führte im Lauf der Zeit dazu, dass die
			nun viele unserer Jurys nicht nur Punkte vergeben, sondern sich auch künstlerisch betätigen.
		</p>
		<p>
			Hier haben wir eine kleine Auswahl an Bildern zusammengestellt, die uns freundlicherweise
			überlassen wurden - wer sein Bild wieder erkennt und als 'von unbekannt' deklariert wurde,
			kann sich gerne bei uns melden (<a href="mailto:sprechakt.landshut@gmx.de"
				>sprechakt.landshut@gmx.de</a
			>)! Weitere Bilder findet Ihr auch auf
			<a href="https://www.instagram.com/slammaler/" rel="external"
				>Jörns Instagramkanal (@slammaler)</a
			>.
		</p>
	</section>
</PageWithNavigation>
