<div><slot /></div>

<style>
	div::before {
		position: absolute;
		box-shadow: rgba(0, 0, 0, 0.1) 0 0 200px 25px;
		box-sizing: border-box;
		content: '';
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}

	div {
		background-color: var(--background-color);
		box-sizing: border-box;
		position: relative;
		padding: 2em;
	}
</style>
