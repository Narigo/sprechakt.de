<header>
	<slot name="navigation" />
	<div>
		<slot>
			<h1 class="text-shadow">SprechAkt - Der Poetry Slam in Landshut</h1>
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
		position: relative;
		text-shadow: -1px -1px 1px #fff, -1px 0px 1px #fff, -1px 1px 1px #fff, 0px -1px 1px #fff,
			0px 0px 1px #fff, 0px 1px 1px #fff, 1px -1px 1px #fff, 1px 0px 1px #fff, 1px 1px 1px #fff;
	}
</style>
