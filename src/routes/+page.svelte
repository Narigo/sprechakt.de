<script lang="ts">
	import { base } from '$app/paths';
	import { getDate } from '$lib/common/events';
	import { getFirstPosts } from '$lib/common/posts';
	import blogDb from '$data/blog.json';
	import slamsDb from '$data/slams.json';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	import BlogSection from '$lib/index/BlogSection.svelte';
	import { getNextEvents } from '$lib/common/events';
	import NextEvents from '$lib/index/NextEvents.svelte';

	const posts = getFirstPosts(blogDb);
	const events = getNextEvents(slamsDb);
	const nextEvent = events[0];
</script>

<svelte:head>
	<title>SprechAkt</title>
	<meta name="description" content="Der Landshuter Poetry Slam in der Alten Kaserne" />
</svelte:head>

<PageWithNavigation>
	<div class="header" slot="header" />
	<section>
		<p class="text-shadow">
			Nächster Termin am {getDate(nextEvent)}.
			<a href={`${base}/slams/${nextEvent.id}`}>Mehr Informationen zum nächsten Event</a>
		</p>
	</section>

	<div class="content">
		<section>
			<h2>Aktuelles</h2>
			<BlogSection {posts} />
		</section>

		<section>
			<h2>Die nächsten Events</h2>
			<NextEvents />
		</section>
	</div>
</PageWithNavigation>

<style>
	.header {
		background-image: url('$lib/index/sprechakt.svg');
		background-position: right;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		flex-direction: column;
		height: 25vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 4em;
		height: 100%;
		width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content section {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: stretch;
	}
</style>
