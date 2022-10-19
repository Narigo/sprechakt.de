<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	const words =
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

	function appear(node, { duration = 1000 }) {
		return {
			duration,
			easing: cubicIn,
			css: (t, u) => `opacity: ${(1 - u) * 0.6}`
		};
	}
</script>

<ul>
	{#each words.split(/\s+/) as word}
		<li in:appear>{word}</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		background-color: black;
		color: black;
	}
</style>
