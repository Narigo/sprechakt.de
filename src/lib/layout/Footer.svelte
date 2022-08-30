<script>
	import { assets } from '$app/paths';
</script>

<footer>
	<slot />
	<div class="columns">
		<div class="column">
			<h4>Folgt dem Sprechakt!</h4>
			<div class="socialIcons">
				<a href="https://www.facebook.com/Sprechakt" rel="external"
					><img src="{assets}/socials/f_logo_RGB-Black_1024.svg" alt="facebook" /></a
				>
				<a href="https://www.instagram.com/sprechakt_landshut/" rel="external"
					><img src="{assets}/socials/glyph-logo_May2016.svg" alt="Instagram" /></a
				>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--secondary-color);
		color: var(--text-color);
		padding: 2rem;
	}
	footer > :first-child {
		margin-top: 0;
	}

	footer > :last-child {
		margin-bottom: 0;
	}

	.columns {
		display: flex;
		gap: 2em;
	}
	.column {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.socialIcons {
		display: flex;
		gap: 0.5em;
	}

	.socialIcons a {
		display: flex;
		padding: 0.5em;
		margin: 0;
	}

	.socialIcons img {
		height: 2em;
		margin: 0;
	}

	h4 {
		font-family: var(--font-heading);
		margin: 0;
		text-transform: uppercase;
	}
</style>
