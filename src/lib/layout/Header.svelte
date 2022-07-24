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
		min-height: 25vh;
	}

	div {
		flex: 1;
	}
</style>
