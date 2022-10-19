<script lang="ts">
	export let open = false;
</script>

<details bind:open>
	<summary>∨</summary>
	<div>
		<slot />
	</div>
</details>

<style>
	summary {
		border: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		height: 2em;
		width: 2em;
		transform: rotate(-90deg);
	}

	summary:focus {
		border: 2px solid #000;
		outline: none;
	}

	details {
		align-items: center;
		display: flex;
		flex: 0;
		font: var(--poem-title-font);
		justify-content: center;
	}

	details[open] > summary {
		transform: rotate(0deg);
	}
</style>
