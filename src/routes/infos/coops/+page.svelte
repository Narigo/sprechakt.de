<script>
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';
	import imageUrl from './coops.jpg';
	import poet1 from './poet1.jpg';
	import poet2 from './poet2.jpg';
	import poet3 from './poet3.jpg';
	import musicAct from './musicAct.jpg';
	import allActs from './allActs.jpg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>Kooperationen</title>
	<meta name="description" content="Kooperationen mit dem SprechAkt" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Kooperationen" {imageUrl} />
	<div>
		<section>
			<p>
				Neben Poetry Slams organisiert das SprechAkt-Team auch Lesungen und andere Literaturformate
				sowie Schreibworkshops. So kamen beispielsweise bereits Kooperationen mit der Aktion
				„Klimazeit“ von Stadt und Landkreis Landshut sowie Bücher Pustet und den Landshuter
				Frauenhäusern anlässlich des Weltfrauentags zu Stande.
			</p>

			<h3>
				Sie wollen einen Poetry Slam, eine Lesung mit „junger Literatur“, einen Schreibworkshop oder
				Ähnliches veranstalten? Wir unterstützen Sie gerne!
			</h3>

			<h3>
				Bitte senden Sie uns Ihre Anfrage per E-Mail an <a href="mailto:sprechakt.landshut@gmx.de"
					>sprechakt.landshut@gmx.de</a
				>.
			</h3>
		</section>

		<section>
			<ImageGrid
				images={[
					{ alt: 'Poetin am Mikrofon', url: poet1 },
					{ alt: 'Poetin am Mikrofon', url: poet2 },
					{ alt: 'Poetin am Mikrofon', url: poet3 },
					{ alt: 'Musikerin tritt auf', url: musicAct },
					{ alt: 'Alle Künstlerinnen', url: allActs }
				]}
			/>
		</section>
	</div>
</PageWithNavigation>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
