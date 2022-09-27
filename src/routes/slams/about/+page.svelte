<script lang="ts">
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './about.jpg';
	import poetUrl from './poet.jpg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
</script>

<svelte:head>
	<title>Was ist ein Poetry Slam?</title>
	<meta name="description" content="Was erwartet mich und wozu überhaupt?" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Was ist ein Poetry Slam?" {imageUrl} />
	<p>
		Ein Poetry Slam ist eine Veranstaltungsform, bei der verschiedene Künstler mit
		selbstgeschriebenen Texten gegeneinander antreten. Von herzergreifenden Geschichten über
		charmant-witziges Storytelling mit Comedy-Touch bis hin zu salvenartigen Rap-Lyrics ist nahezu
		alles denkbar.
	</p>
	<p>
		Seine Ursprünge hat der Poetry Slam im Land der unendlichen Möglichkeiten - ja, ihr habt richtig
		geraten: den USA. Dort entstand das neue Format in den 80er-Jahren in Chicago und verbreitete
		sich von dort aus zunächst in Nordamerika und dann weltweit. In den Neunzigern erreichte der
		Dichterwettstreit Deutschland und stieß dort auf fruchtbaren Boden. Inzwischen ist die deutsche
		Szene <a
			href="https://www.unesco.de/kultur-und-natur/immaterielles-kulturerbe/immaterielles-kulturerbe-deutschland/poetry-slam"
			rel="external">größer und vielfältiger als im Ursprungsland USA</a
		>. Es gibt Slams nicht nur in Großstädten wie München und Berlin, sondern auch in deutlich
		kleineren wie eben Landshut.
	</p>

	<img src={poetUrl} alt="Poet steht erklärend auf der Bühne" />
</PageWithNavigation>
