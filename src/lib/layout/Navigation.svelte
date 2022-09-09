<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	const currentUrl = $page.url.pathname;
</script>

<nav>
	<li>
		<a class:active={currentUrl === `${base}/`} href="{base}/">SprechAkt</a>
	</li>
	<li>
		<a class:active={currentUrl.startsWith(`${base}/posts`)} href="{base}/posts">Aktuelles</a>
	</li>
	<li><a class:active={currentUrl.startsWith(`${base}/slams`)} href="{base}/slams">Slams</a></li>
	<li><a class:active={currentUrl.startsWith(`${base}/infos`)} href="{base}/infos">Infos</a></li>
</nav>
<slot />

<style>
	nav {
		align-items: center;
		background-color: var(--primary-color);
		color: var(--pure-white);
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-heading);
		gap: 1em;
		justify-content: center;
		padding: 1em;
		text-transform: uppercase;
	}

	li {
		display: inline-flex;
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
</style>
