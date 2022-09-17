<script lang="ts">
	import { base } from '$app/paths';
	import placeholder from './placeholder.svg';
	import type { SprechAktAct } from '$lib/types';

	export let act: SprechAktAct;

	const hasSocials = !!(act.instagram ?? act.twitter ?? act.youTube);
</script>

<div class="card">
	<a href="{base}/infos/acts/{act.id}">
		<div class="image">
			{#if act.image}
				<img src={act.image.url} alt={act.name} />
			{:else}
				<img src={placeholder} alt={`Platzhalter für ${act.name}`} />
			{/if}
		</div>
	</a>
	<div class="content">
		<a href="{base}/infos/acts/{act.id}">
			<h3>{act.name}</h3>
		</a>
		{#if hasSocials}
			<div class="socials">
				{#if act.facebook}<a rel="external" href={act.facebook}>f</a>{/if}
				{#if act.instagram}
					<a rel="external" href={act.instagram}>
						<img src={`${base}/socials/glyph-logo_May2016.svg`} alt="Instagram" />
					</a>
				{/if}
				{#if act.twitter}<a rel="external" href={act.twitter}>t</a>{/if}
				{#if act.youTube}<a rel="external" href={act.youTube}>yt</a>{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	a {
		overflow: hidden;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 15em;
		overflow: hidden;
	}

	.content {
		padding: 1em;
	}

	.image {
		max-width: 100%;
	}

	.socials {
		display: flex;
		gap: 1em;
		justify-content: flex-end;
	}

	.socials a {
		height: 2em;
		padding: 0 0.5em;
		width: 2.5em;
	}

	h3 {
		margin: 0;
	}

	img {
		display: block;
		height: 100%;
		width: 100%;
	}
</style>
