<script lang="ts">
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithSprechAktNav from '$lib/layout/PageWithSprechAktNav.svelte';
	import imageUrl from './history.jpg';
</script>

<svelte:head>
	<title>Historie</title>
	<meta
		name="description"
		content="Die Geschichte des SprechAkts Landshut und wie es zustande kam."
	/>
</svelte:head>

<PageWithSprechAktNav>
	<HeaderImage slot="header" alt="Historie" {imageUrl} />

	<h3>Die Anfänge</h3>
	<p>
		November 2013 – der erste SprechAkt Poetry Slam findet unter der Leitung von Sebastian Stopfer
		und Sabine Oberpriller in der Alten Kaserne statt. Damals noch im Clubraum, doch wegen des
		großen Besucherandrangs zog der Slam schon bei der dritten Veranstaltung in den großen Saal.<br
		/>
		Seitdem wetteifern fünfmal pro Jahr Poet:Innen in der Alten Kaserne um den Slamgewinn. Hinzu kommen
		Themenslams, beispielsweise im Rahmen der Aktion Klimazeit oder zum Weltfrauentag, bei Bücher Pustet
		und der VHS Moosburg.<br />
		Einige Dichter begleiten den SprechAkt bereits nahezu von Beginn an, etwa Markus Berg, Albrecht Rau
		und Bert Uschner, die heute noch regelmäßig in Landshut zu Gast sind.
	</p>

	<h3>Personelle Veränderungen</h3>
	<p>
		Im Organisationsteam gab es in den letzten Jahren mehrere Veränderungen: Sabine Oberpriller und
		Sebastian Stopfer hielten nach der Gründung bis 2015 das Zepter in der Hand. Danach übergaben
		sie den Slam an Mic Mehler und Christoph Hebenstreit vom Reimrausch Poetry Slam. Aufgrund von
		Zeitnot reichten die beiden nach einem Jahr den Staffelstab an Sebastian Geiger und Kristina
		Sterl (inzwischen Stopfer) weiter.
	</p>

	<h3>Einige Experimente</h3>
	<p>
		In der Zeit nach 2017 entstanden einige neue Formate - die bereits erwähnten Themenslams und
		Leseabende, eine Open Stage in Joschi’s Bar in der Landshuter Altstadt sowie der Grand Slam.
		Letzterer leitete jeweils im Januar die Slam-Saison 2019 und 2020 ein. Nahezu 250 Besucher kamen
		zu dem Wettstreit der Gewinner:Innen des Vorjahres, der zusätzlich durch besondere
		Feature-Poeten wie Bas Böttcher im ersten und Alex Burkard im zweiten Jahr glänzte.
	</p>

	<h3>Instagram und die Corona-Jahre</h3>
	<p>
		Nach dem Ausscheiden von Kristina Sterl ergänzte Sandra Schörghuber 2019 das Organisationsteam.
		Kurz darauf erblickte der Instagram-Kanal des SprechAkts das Licht der Welt und wurde zusammen
		mit der bereits bestehenden Facebook-Seite Schauplatz einiger Online-Formate, die vor dem
		Hintergrund der Pandemie entstanden: die 18-teilige Reihe Corona-Poetry, zwei weihnachtliche
		Fortsetzungsgeschichten in der Adventszeit sowie den ersten Nachhaltigkeitsslam per Live-Stream
		aus der VHS Moosburg.
	</p>

	<h3>2023 steht dem SprechAkt ein weiterer wichtiger Meilenstein bevor: Er wird 10!</h3>
</PageWithSprechAktNav>
