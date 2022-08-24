<footer>
	<slot />
	<div class="column">
		<h4>Social links</h4>
		<div class="socialIcons">
			<a href="https://www.facebook.com/Sprechakt" rel="external">Facebook</a>
			<a href="https://www.instagram.com/sprechakt_landshut/" rel="external">Instagram</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--secondary-color);
		padding: 2rem;
	}
	footer > :first-child {
		margin-top: 0;
	}

	footer > :last-child {
		margin-bottom: 0;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.socialIcons {
		display: flex;
		gap: 1em;
	}

	h4 {
		font-family: var(--font-heading);
		margin: 0;
		text-transform: uppercase;
	}
</style>
