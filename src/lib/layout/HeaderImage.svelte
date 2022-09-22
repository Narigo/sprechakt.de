<script lang="ts">
	import { styles } from '$lib/common/styles';

	export let alt: string;
	export let aspectRatio: string = '2 / 3';
	export let imageUrl: string;
</script>

<h2 use:styles={{ aspectRatio, imageUrl: `url(${imageUrl})` }}>
	{alt}
</h2>

<style>
	h2 {
		background-image: var(--imageUrl);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: transparent;
		height: calc(var(--aspectRatio) * 100vw);
		margin: 0;
		max-height: 50vh;
		text-shadow: none;
	}
</style>
