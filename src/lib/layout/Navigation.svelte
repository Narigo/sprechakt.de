<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	const currentUrl = $page.url.pathname;
</script>

<nav>
	<li>
		<a class:active={currentUrl === `${base}/`} href="{base}/">Sprechakt</a>
	</li>
	<li><a class:active={currentUrl === `${base}/slams`} href="{base}/slams">Slams</a></li>
	<li>
		<a class:active={currentUrl === `${base}/posts`} href="{base}/posts">Nachrichten</a>
	</li>
	<li><a class:active={currentUrl === `${base}/acts`} href="{base}/acts">Künstler:innen</a></li>
	<li>
		<a class:active={currentUrl === `${base}/historie`} href="{base}/historie">Historie</a>
	</li>
	<li>
		<a class:active={currentUrl === `${base}/impressum`} href="{base}/impressum">Impressum</a>
	</li>
</nav>

<style>
	nav {
		align-items: center;
		background-color: var(--primary-color);
		color: var(--pure-white);
		display: flex;
		font-family: var(--font-heading);
		gap: 1em;
		justify-content: center;
		padding: 1em;
		text-transform: uppercase;
	}

	li {
		display: inline-flex;
		height: 100%;
		list-style-type: none;
	}

	a {
		color: var(--pure-white);
		text-decoration: none;
	}

	.active {
		font-weight: 800;
		text-decoration: underline;
	}

	.logo {
		height: 2em;
	}
</style>
