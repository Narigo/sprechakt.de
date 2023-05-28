<script lang="ts">
	import { styles } from '$lib/common/styles';
	import HeaderImage from '$lib/layout/HeaderImage.svelte';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import PoemCreator from '$lib/reimemonster/PoemCreator/PoemCreator.svelte';
	import { onMount } from 'svelte';
	import imageUrl from './reimemonster.svg';

	let showHelp = true;
	let maxContentHeight = '100vh';
	let contentWrap: HTMLDivElement | null = null;
	onMount(() => {
		if (contentWrap) {
			maxContentHeight = `${contentWrap.scrollHeight}px`;
		}
	});
</script>

<PageWithNavigation>
	<HeaderImage slot="header" alt="Was ist ein Poetry Slam?" {imageUrl} />
	<section>
		<input id="details" type="checkbox" bind:checked={showHelp} />
		<label for="details">
			<h2>
				Einführungstext {#if showHelp}einklappen{:else}anzeigen{/if}
			</h2>
		</label>
		<div class="wrap" use:styles={{ maxContentHeight }} bind:this={contentWrap}>
			<div class="content">
				<p>
					Das Reimemonster-Tool soll Dir beim Schreiben von Gedichten helfen. Es zeigt Dir unter dem
					Textfeld Reimvorschläge an und auf der linken Seite die Anzahl der Silben, die in einem
					Vers (einer Zeile) vorkommen. Manchmal kommt die Anzahl der Silben auf die Betonung an,
					daher ist diese Zahl nicht immer zu 100% genau ("Mil-li-o-nen" oder "Mil-lio-nen" zum
					Beispiel). Zudem hilft die Zahl zwar oft, um ein Reimschema durchzuhalten, aber auch das
					funktioniert damit nicht immer. Nichtsdestotrotz können die Reimvorschläge und die
					Silbenanzahl durchaus hilfreich sein, um auf schönere Texte zu kommen.
				</p>
				<p>
					Die Gedichte, die Du hier speichern kannst, werden nur auf dem Endgerät gespeichert, auf
					dem Du den jeweiligen Text verfasst. Sobald ein Titel und ein Text eingegeben wurde, wird
					es möglich, mit dem "💾" Symbol zu speichern. Gespeicherte Gedichte lassen sich mit dem
					Icon neben dem Titel anzeigen und von dort laden. Es besteht an der Stelle auch die
					Möglichkeit, gespeicherte Gedichte zu löschen.
				</p>
				<p>
					Verbesserungsvorschläge und Kritik für das Reimemonster gerne direkt an Jörn (<a
						href="https://www.instagram.com/slammaler/"
						rel="external noopener noreferrer"
						target="_blank">@slammaler</a
					> auf Instagram).
				</p>
			</div>
		</div>
	</section>
	<PoemCreator />
</PageWithNavigation>

<style>
	section {
		--arrow-size: 10px;
		--animation-duration: 500ms;
		--maxContentHeight: 100vh;
		margin-bottom: 2em;
	}
	label {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
		padding: 0 0 1em;
	}
	label h2 {
		display: inline;
		margin: 0;
	}
	label::before {
		content: '';
		box-sizing: border-box;
		border: calc(var(--arrow-size) / 2) solid transparent;
		border-left: var(--arrow-size) solid #000;
		font-size: 0;
		height: var(--arrow-size);
		width: var(--arrow-size);
		transform: rotate(0deg);
		transform-origin: 25% 50%;
		transition: transform calc(var(--animation-duration) / 2);
	}
	#details:checked ~ label::before {
		transform: rotate(90deg);
	}
	#details ~ .wrap {
		max-height: 100vh;
		overflow-y: hidden;
	}
	#details:checked ~ .wrap > .content {
		animation-name: intro;
		animation-duration: var(--animation-duration);
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
		animation-direction: normal;
	}
	#details:not(:checked) ~ .wrap {
		animation-name: intro;
		animation-duration: var(--animation-duration);
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
		animation-direction: reverse;
	}
	#details {
		display: none;
	}
	@keyframes intro {
		0% {
			max-height: 0;
		}
		100% {
			max-height: var(--maxContentHeight);
		}
	}
</style>
