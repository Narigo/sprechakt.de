<script>
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import PoemCreator from '$lib/reimemonster/PoemCreator/PoemCreator.svelte';

	let showHelp = true;
</script>

<PageWithNavigation>
	<h2 slot="header">Das Reimemonster</h2>
	<details bind:open={showHelp}>
		<summary
			><h3>
				{#if showHelp}Einführungstext einklappen
				{:else}Einführungstext anzeigen{/if}
			</h3>
		</summary>
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
			möglich, mit dem "+" Symbol zu speichern. Gespeicherte Gedichte lassen sich mit dem Icon neben
			dem Titel anzeigen und von dort laden. Es besteht an der Stelle auch die Möglichkeit,
			gespeicherte Gedichte zu löschen.
		</p>
	</details>
	<PoemCreator />
</PageWithNavigation>

<style>
	h2 {
		max-width: 1024px;
		margin: 0;
		padding: 1em;
	}
	details {
		margin-bottom: 2em;
	}

	summary {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
		padding: 1em 0;
	}
	summary h3 {
		display: inline;
	}
</style>
