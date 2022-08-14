<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getDate, getEventsById } from '$lib/common/events';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import events from '$data/slams.json';
	import ImageGrid from '$lib/posts/ImageGrid.svelte';

	const id = $page.params.id;
	const dates = getEventsById(events);
	const event = dates[id];
</script>

<PageWithNavigation>
	<h1 slot="header">Slams</h1>
	<section>
		<h3>{getDate(event)}</h3>
		<SvelteMarkdown source={event.description ?? ''} options={{ baseUrl: base, gfm: true }} />
		<ImageGrid images={event.images ?? []} />
	</section>
	<a href="..">Zurück</a>
</PageWithNavigation>
