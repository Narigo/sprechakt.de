<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import SprechAkt from './SprechAkt.svelte';
	const currentUrl = $page.url.pathname;
</script>

<div class="navigation">
	<input id="layout-navigation-menu" type="checkbox" />
	<label class="menu-btn" for="layout-navigation-menu"><span class="icon" /></label>
	<nav>
		<a class="logo" href="{base}/">
			<div>
				<h2>SprechAkt</h2>
				<p>Der Poetry Slam in Landshut</p>
			</div>
			<SprechAkt />
		</a>
		<ul>
			<li>
				<a class:active={currentUrl.startsWith(`${base}/posts`)} href="{base}/posts">Aktuelles</a>
			</li>
			<li>
				<a class:active={currentUrl.startsWith(`${base}/slams`)} href="{base}/slams/events"
					>Poetry Slam</a
				>
				<ul>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/slams/about`)}
							href={`${base}/slams/about`}>Was ist ein Poetry Slam?</a
						>
					</li>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/slams/events`)}
							href={`${base}/slams/events`}>Unsere Termine</a
						>
					</li>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/reimemonster`)}
							href={`${base}/reimemonster`}>Reimemonster</a
						>
					</li>
				</ul>
			</li>
			<li>
				<a class:active={currentUrl.startsWith(`${base}/infos`)} href="{base}/infos/visitors"
					>Infos</a
				>
				<ul>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/infos/visitors`)}
							href={`${base}/infos/visitors`}>Für Besucher:Innen</a
						>
					</li>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/infos/acts`)}
							href={`${base}/infos/acts`}>Für Künstler:Innen</a
						>
					</li>
					<li>
						<a
							class:active={currentUrl.startsWith(`${base}/infos/coops`)}
							href={`${base}/infos/coops`}>Kooperationen</a
						>
					</li>
					<li>
						<a class:active={currentUrl.startsWith(`${base}/infos/map`)} href={`${base}/infos/map`}
							>Anfahrt</a
						>
					</li>
				</ul>
			</li>
			<li>
				<a
					class:active={currentUrl === `${base}/` ||
						currentUrl.startsWith(`${base}/acts`) ||
						currentUrl.startsWith(`${base}/history`) ||
						currentUrl.startsWith(`${base}/team`)}
					href="{base}/">Der SprechAkt</a
				>
				<ul>
					<li>
						<a class:active={currentUrl.startsWith(`${base}/history`)} href={`${base}/history`}
							>Historie</a
						>
					</li>
					<li>
						<a class:active={currentUrl.startsWith(`${base}/team`)} href={`${base}/team`}>Team</a>
					</li>
					<li>
						<a class:active={currentUrl.startsWith(`${base}/acts`)} href={`${base}/acts`}
							>Poet:Innen</a
						>
					</li>
					<li>
						<a class:active={currentUrl.startsWith(`${base}/drawings`)} href={`${base}/drawings`}
							>Zeichnungen</a
						>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>
<slot />

<style>
	#layout-navigation-menu {
		display: none;
	}

	#layout-navigation-menu ~ nav {
		display: none;
	}

	#layout-navigation-menu:checked ~ nav {
		display: block;
		height: 100vh;
		overflow: auto;
		position: fixed;
		width: 100vw;
		z-index: 1;
	}

	.navigation {
		color: var(--pure-white);
		font-family: var(--font-heading);
	}

	.menu-btn {
		background-color: var(--primary-color);
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		opacity: 0.75;
		position: fixed;
		padding: 2em;
		top: 0;
		right: 0;
		z-index: 2;
	}

	.menu-btn .icon,
	.menu-btn .icon::before,
	.menu-btn .icon::after {
		background-color: var(--pure-white);
		border-radius: 5px;
		content: ' ';
		display: block;
		height: 5px;
		transition: transform 200ms ease-out;
		transform: translate(0, -10px);
		width: 2em;
	}

	.menu-btn .icon::before {
		transform: translate(0, 10px);
	}

	.menu-btn .icon::after {
		transform: translate(0, 15px);
	}

	.menu-btn:hover .icon::before {
		transform: translate(5px, 10px);
	}
	.menu-btn:hover .icon::after {
		transform: translate(5px, 15px);
	}

	nav {
		background-color: var(--primary-color);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: 6em 2em 2em;
		text-transform: uppercase;
		width: 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1em;
		margin: 0;
		padding: 0;
	}

	li ul {
		padding-left: 1em;
	}

	li {
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.logo {
		align-items: flex-end;
		display: flex;
		fill: var(--pure-white);
		gap: 1em;
	}

	.logo :global(svg) {
		max-height: 100%;
	}

	a {
		color: var(--pure-white);
		text-decoration: none;
	}

	.active {
		font-weight: 800;
		text-decoration: underline;
	}

	@media (min-width: 1024px) {
		#layout-navigation-menu ~ nav,
		#layout-navigation-menu:checked ~ nav {
			display: flex;
			flex: 1;
			height: 100%;
			position: unset;
			width: 23em;
		}

		.menu-btn {
			display: none;
		}
	}
</style>
