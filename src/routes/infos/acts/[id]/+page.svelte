<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';
	import { getActById } from '$lib/common/acts';
	import { afterUpdate } from 'svelte';
	import type { SprechAktAct } from '$lib/types';
	import PageWithInfoNav from '$lib/infos/PageWithInfoNav.svelte';

	let id: string;
	let act: SprechAktAct | undefined;

	initValues();
	afterUpdate(initValues);

	function initValues() {
		id = $page.params.id;
		act = getActById(id);
	}
</script>

{#if act}
	<PageWithInfoNav>
		<h1 slot="header">
			{act.name}
		</h1>
		<article>
			{#if act.image}<img src={act.image?.url} alt={act.name} />{/if}
			<SvelteMarkdown source={act.bio} />
		</article>
	</PageWithInfoNav>
{:else}
	<PageWithInfoNav><p>Künstler:in nicht gefunden!</p></PageWithInfoNav>
{/if}
