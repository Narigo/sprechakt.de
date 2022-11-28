<script lang="ts">
	import { styles } from '$lib/common/styles';

	export let alt: string;
	export let aspectRatio: string = '16 / 9';
	export let imageUrl: string;
	export let position: string = 'center';
</script>

<h2 use:styles={{ aspectRatio, imageUrl: `url(${imageUrl})`, position }}>
	{alt}
</h2>

<style>
	h2 {
		background-image: var(--imageUrl);
		background-position: var(--position);
		background-size: contain;
		background-repeat: no-repeat;
		background-color: #96b0b0;
		color: transparent;
		height: calc(var(--aspectRatio) * 100vw);
		margin: 0;
		max-height: calc(100vh / 3);
		text-shadow: none;
	}
</style>
