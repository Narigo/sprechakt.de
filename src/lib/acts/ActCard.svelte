<script lang="ts">
	import { base } from '$app/paths';
	import placeholder from './placeholder.svg';
	import type { SprechAktAct } from '$lib/types';

	export let act: SprechAktAct;
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
		<div class="content">
			<h3>{act.name}</h3>
		</div>
	</a>
</div>

<style>
	a {
		overflow: hidden;
		text-decoration: none;
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

	img {
		height: 100%;
		width: 100%;
	}
</style>
