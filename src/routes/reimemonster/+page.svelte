<script>
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import PoemCreator from '$lib/reimemonster/PoemCreator/PoemCreator.svelte';
	import { findRhyme, countSyllables } from 'reimemonster';
</script>

<PageWithNavigation>
	<h2 slot="header">Das Reimemonster</h2>
	<p>
		Das folgende Tool soll Dir helfen, wenn Du selbst Gedichte schreiben möchtest. Es zeigt Dir
		Reimvorschläge an und die Anzahl der Silben, die in einem Vers (einer Zeile) vorkommen. Manchmal
		kommt die Anzahl der Silben auf die Betonung an, daher ist diese Zahl nicht immer zu 100% genau
		("Mil-li-o-nen" oder "Mil-lio-nen" zum Beispiel).
	</p>
	<p>
		Die Gedichte, die Du hier schreibst, werden nur auf Deinem Endgerät gespeichert, auf dem Du den
		jeweiligen Text verfasst.
	</p>
	<PoemCreator />
</PageWithNavigation>
