<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import { getActById } from '$lib/common/acts';
	import { afterUpdate } from 'svelte';
	import type { SprechAktAct } from '$lib/types';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import { assets } from '$app/paths';

	let id: string;
	let act: SprechAktAct | undefined;

	const imageDb = `${assets}/images/from-db`;

	initValues();
	afterUpdate(initValues);

	function initValues() {
		id = $page.params.id;
		act = getActById(id);
	}
</script>

{#if act}
	<PageWithNavigation>
		<h1 slot="header">
			{act.name}
		</h1>
		<article>
			{#if act.image}<img src="{imageDb}/{act.image.pathInAssets}" alt={act.name} />{/if}
			<SvelteMarkdown source={act.bio} />
		</article>
	</PageWithNavigation>
{:else}
	<PageWithNavigation><p>Künstler:in nicht gefunden!</p></PageWithNavigation>
{/if}

<style>
	h1 {
		padding: 0 1em;
	}
	img {
		max-width: 100%;
	}
</style>
