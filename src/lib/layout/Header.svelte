<header>
	<slot name="navigation" />
	<div>
		<slot>
			<h1>Sprechakt Poetry Slam!</h1>
		</slot>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
	}

	div {
		flex: 1;
		padding: 2em;
		position: relative;
	}
</style>
