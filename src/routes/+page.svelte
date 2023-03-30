<script lang="ts">
	import { base } from '$app/paths';
	import { getDate } from '$lib/common/events';
	import slamsDb from '$data/slams.json';
	import { getNextEvents } from '$lib/common/events';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import imageUrl from './startpage.svg';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import type { SprechAktEvent } from '$lib/types';

	const events = getNextEvents(slamsDb);
	const nextEvent: SprechAktEvent | undefined = events[events.length - 1];
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<HeaderImage
		slot="header"
		alt="SprechAkt - Der Poetry Slam in Landshut"
		position="center"
		{imageUrl}
	/>
	{#if nextEvent}
		<h2>
			Nächster Poetry Slam am {getDate(nextEvent)}.<br />
			<a href={`${base}/slams/events/${nextEvent.id}`}>Mehr Informationen zum nächsten Event</a>.
		</h2>
	{/if}

	<section>
		<p>
			Was ist ein Sprechakt? Es bedeutet nicht, wie wir in einem Kommentar auf Instagram mal gefragt
			wurden, dass die Künstler:Innen unbekleidet auf der Bühne stehen. Stattdessen ist der
			Sprechakt ein Begriff aus der Sprachforschung, genauer der Pragmatik. Kurz runtergebrochen und
			etwas umgangssprachlich ausgedrückt, besagt die Sprechakttheorie, dass wir nicht einfach nur
			schöne Worte in den Äther entlassen, wenn wir reden. Stattdessen handeln wir mit unseren
			sprachlichen Äußerungen und verändern dadurch die Realität um uns herum. Wir handeln, also
			agieren, wenn wir sprechen. Wer Poetry Slam erlebt, bekommt eine Ahnung davon, was das
			bedeutet.
		</p>
		<p>
			Seit fast zehn Jahren bringt der SprechAkt Poetry Slam regelmäßig junge und junggebliebene
			Poet:Innen und Autor:Innen auf die Bühne der Alten Kaserne in Landshut, wo sie mit
			selbstverfassten Texten und Gedichten um die Gunst des Publikums kämpfen. Was die
			Künstler:Innen dort präsentieren ist vielfältig, reicht von lustig über emotional bis hin zu
			nachdenklich und ernst und zeigt, wie vielfältig moderne Literatur sein kann.
		</p>
	</section>
</PageWithNavigation>

<style>
	h2 {
		text-align: center;
	}
</style>
