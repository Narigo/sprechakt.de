<script>
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import PoemCreator from '$lib/reimemonster/PoemCreator/PoemCreator.svelte';
	import imageUrl from './reimemonster.svg';

	let showHelp = true;
</script>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Was ist ein Poetry Slam?" {imageUrl} />
	<details bind:open={showHelp}>
		<summary
			><h2>
				{#if showHelp}Einführungstext einklappen
				{:else}Einführungstext anzeigen{/if}
			</h2>
		</summary>
		<div>
			<p>
				Das Reimemonster-Tool soll Dir beim Schreiben von Gedichten helfen. Es zeigt Dir unter dem
				Textfeld Reimvorschläge an und auf der linken Seite die Anzahl der Silben, die in einem Vers
				(einer Zeile) vorkommen. Manchmal kommt die Anzahl der Silben auf die Betonung an, daher ist
				diese Zahl nicht immer zu 100% genau ("Mil-li-o-nen" oder "Mil-lio-nen" zum Beispiel). Zudem
				hilft die Zahl zwar oft, um ein Reimschema durchzuhalten, aber auch das funktioniert damit
				nicht immer. Nichtsdestotrotz können die Reimvorschläge und die Silbenanzahl durchaus
				hilfreich sein, um auf schönere Texte zu kommen.
			</p>
			<p>
				Die Gedichte, die Du hier speichern kannst, werden nur auf dem Endgerät gespeichert, auf dem
				Du den jeweiligen Text verfasst. Sobald ein Titel und ein Text eingegeben wurde, wird es
				möglich, mit dem "+" Symbol zu speichern. Gespeicherte Gedichte lassen sich mit dem Icon
				neben dem Titel anzeigen und von dort laden. Es besteht an der Stelle auch die Möglichkeit,
				gespeicherte Gedichte zu löschen.
			</p>
			<p>
				Verbesserungsvorschläge und Kritik für das Reimemonster gerne direkt an Jörn (<a
					href="https://www.instagram.com/slammaler/"
					rel="external noopener"
					target="_blank">@slammaler</a
				> auf Instagram).
			</p>
		</div>
	</details>
	<PoemCreator />
</PageWithNavigation>

<style>
	details {
		/* animation: intro 500ms ease-in-out 0 1 forwards; */
		margin-bottom: 2em;
	}
	details div {
		animation: 3s 1 backwards intro;
		height: 0;
	}
	details[open] div {
		animation: 3s 1 forwards intro;
		height: auto;
	}

	summary {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
		padding: 1em 0;
	}
	summary h2 {
		display: inline;
	}
	@keyframes intro {
		from {
			height: 0;
		}
		to {
			height: 500px;
		}
	}
</style>
