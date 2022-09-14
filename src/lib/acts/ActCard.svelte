<script lang="ts">
	import { base } from '$app/paths';
	import type { SprechAktAct } from '$lib/types';

	export let act: SprechAktAct;
</script>

<a href="{base}/infos/acts/{act.id}"
	><div class="card">
		{#if act.image}<div class="image"><img src={act.image.url} alt={act.name} /></div>{/if}
		<div class="content">
			<h3>{act.name}</h3>
		</div>
	</div></a
>

<style>
	a {
		overflow: hidden;
		text-decoration: none;
	}

	.card {
		display: flex;
		flex-direction: column;
		max-width: 15em;
		overflow: hidden;
	}

	.image {
		max-width: 100%;
	}

	img {
		height: 100%;
		width: 100%;
	}
</style>
