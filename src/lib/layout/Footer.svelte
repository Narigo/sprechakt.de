<footer>
	<slot />
	<p>Weitere Informationen folgen bald...</p>
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
</style>
