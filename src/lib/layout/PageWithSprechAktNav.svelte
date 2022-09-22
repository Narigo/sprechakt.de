<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import PageWithNavigation from '$lib/layout/PageWithNavigation.svelte';
	const currentUrl = $page.url.pathname;
</script>

<PageWithNavigation>
	<nav slot="navigation">
		<li>
			<a class:active={currentUrl.startsWith(`${base}/history`)} href={`${base}/history`}
				>Historie</a
			>
		</li>
		<li>
			<a class:active={currentUrl.startsWith(`${base}/team`)} href={`${base}/team`}>Team</a>
		</li>
		<li>
			<a class:active={currentUrl.startsWith(`${base}/acts`)} href={`${base}/acts`}>Poet:Innen</a>
		</li>
	</nav>
	<slot slot="header" name="header" />
	<slot />
	<slot slot="footer" name="footer" />
</PageWithNavigation>

<style>
	nav {
		align-items: center;
		background-color: var(--secondary-color);
		color: var(--pure-white);
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-heading);
		gap: 1em;
		justify-content: center;
		padding: 1em;
		text-transform: uppercase;
	}

	nav li {
		color: var(--pure-white);
		font-family: var(--font-subheading);
		list-style-type: none;
		text-transform: uppercase;
	}

	a {
		color: var(--pure-white);
		text-decoration: none;
	}

	.active {
		font-weight: 800;
		text-decoration: underline;
	}
</style>
