<script>
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import imageUrl from './info-visitors.svg';
	import visitors from './visitors.jpg';
</script>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Infos für Besucher:Innen" {imageUrl} />

	<p>
		Poetry Slams zeichnen sich dadurch aus, dass sie das Publikum mit einbinden - sei es, dass sie
		mit der Person auf der Bühne interagieren oder durch die anschließende Bewertung des Auftritts.
		Poetry Slams wären nichts ohne die Besucher:Innen! Hier haben wir ein paar Informationen für den
		nächsten Besuch in der Alten Kaserne zusammengestellt:
	</p>

	<section>
		<img src={visitors} alt="Ein Blick von der Bühne ins Publikum" />

		<h2>Wie viel Eintritt kostet der SprechAkt Poetry Slam?</h2>
		<p>
			Der Eintritt ist aus Prinzip frei, um wirklich allen den Besuch der Veranstaltung zu
			ermöglichen. Der SprechAkt finanziert sich über Spenden, die im Anschluss an jeden Slam mit
			Hilfe von Chantal Walker gesammelt werden.
		</p>

		<h2>Brauche ich ein Ticket oder muss ich einen Platz reservieren?</h2>
		<p>Nein, es reicht, einfach rechtzeitig da zu sein.</p>

		<h2>Wann fängt der Slam an?</h2>
		<p>Beginn des Slams ist um 19.30 Uhr, Einlass für das Publikum ist ab 18.45 Uhr.</p>

		<h2>Wie oft findet der Slam statt?</h2>
		<p>
			In der Regel findet alle zwei Monate donnerstags eine Veranstaltung statt. Hier geht es zu den
			aktuellen Terminen. Außerdem wird über Facebook und Instagram noch einmal auf die Slams
			hingewiesen.
		</p>

		<h2>Wie entscheidet das Publikum den Dichterwettstreit?</h2>
		<p>
			Die Besucher:Innen sind auf zwei Arten involviert. Erstens, sind manche von Ihnen Teil der
			Jurys, die vorab von den Organisatoren ausgewählt werden (Freiwillige können sich jedoch gerne
			jederzeit melden). Die Jurys bestimmen, wer ins Finale kommt. Dort entscheidet dann das
			gesamte Publikum über den Applaus, wer schlussendlich gewinnt.
		</p>
	</section>
</PageWithNavigation>

<style>
	img {
		float: right;
		margin-left: 1em;
		width: 50%;
	}

	@media screen and (max-width: 1024px) {
		img {
			margin: 1em 0;
			width: 100%;
		}
	}
</style>
