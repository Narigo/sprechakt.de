<script lang="ts">
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './team.svg';
	import PageWithNavigationAndGallery from '$lib/layout/PageWithNavigationAndGallery.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const images = data.images;
</script>

<svelte:head>
	<title>Team SprechAkt Landshut</title>
	<meta name="description" content="Das Team des SprechAkt Landshut stellt sich vor" />
</svelte:head>

<PageWithNavigationAndGallery {images}>
	<HeaderImage slot="header" alt="Team" {imageUrl} />

	<h2>Aktuelle Mitglieder:</h2>
	<ul>
		<li>
			<strong>Sebastian Geiger:</strong> Moderator und Organisator, schreibt den Newsletter, kümmert
			sich um den Facebook-Auftritt des SprechAkts und vieles mehr.
		</li>
		<li>
			<strong>Sandra Schörghuber:</strong> Organisatorin im Hintergrund, unter anderem verantwortlich
			für die Jurys und den Instagram-Kanal des SprechAkts.
		</li>
		<li>
			<strong>Pascal Simon:</strong> Ist Poetryslammer, Autor und Comedian und war schon häufiger als
			Gast bei uns auf der Bühne. Seit 2022 ist er Teil unseres Teams und übernimmt Moderation und Organisation.
		</li>
		<li>
			<strong>Laura Hybner:</strong> 2022 ist die Poetryslammerin und Autorin Teil unseres Teams geworden.
			Zusammen mit Sandra schmeißt sie unsere Social Media Auftritte und moderiert.
		</li>
		<li>
			<strong>Chantal Walker:</strong> Das älteste aktive Mitglied des Poetry Slams ist ein Walker-Hut.
			Sie hat eine Doppelfunktion inne. Mit ihr wird die Reihenfolge der Künstler:Innen ausgelost und
			sie nimmt bereitwillig die Spenden der Besucher:Innen auf. Bisher hat sie noch keinen Slam verpasst.
		</li>
		<li>
			<strong>Lindy:</strong> Das zweitälteste Mitglied des SprechAkts ist ein Holzfrosch. Er kommt dann
			zum Einsatz, wenn die Auftretenden das Zeitlimit überschreiten, was aber sehr selten vorkommt.
		</li>
	</ul>

	<h2>Ehemalige Mitglieder:</h2>
	<ul>
		<li>
			<strong>Sebastian Stopfer:</strong> SprechAkt-Gründer Nr. 1, Moderator und Organisator. Das Mastermind
			verließ den aktiven Dienst 2015 wegen seines Umzugs nach Nürnberg.
		</li>
		<li>
			<strong>Sabine Oberpriller:</strong> SprechAkt-Gründerin Nr. 2, Moderatorin und Organisatorin sowie
			das andere Mastermind, verließ den aktiven Dienst ebenfalls 2015, weil es sie aus beruflichen Gründen
			nach Frankfurt verschlagen hat.
		</li>
		<li>
			<strong>Mic Mehler und Christoph Hebenstreit:</strong> Die beiden Moderatoren des befreundeten
			Reimrausch Poetry Slams aus Oberbayern sind 2015 - in der einjährigen Übergangszeit - netterweise
			eingesprungen.
		</li>
		<li>
			<strong>Kristina Sterl (inzwischen Stopfer):</strong> Organisatorin im Hintergrund und manchmal
			auf der Bühne zu finden. Sie verließ den Slam 2019 und folgte Sebastian Stopfer nach Nürnberg.
			Inzwischen sind die beiden verheiratet.
		</li>
	</ul>
</PageWithNavigationAndGallery>
