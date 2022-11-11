<script lang="ts">
	import { writable } from 'svelte/store';

	export let images: readonly { alt: string; url: string; credits?: string; title?: string }[];
	let selectedImage = writable<{ alt: string; url: string } | null>(null);
</script>

<section>
	{#each images as image, imageIndex}
		{#if $selectedImage === image}
			<button
				class="selected"
				type="button"
				on:click={(e) => {
					e.preventDefault();
					$selectedImage = null;
				}}
			>
				<div><span>X</span></div>
				<img src={image.url} alt={image.alt} title={image.title} />
				{#if image.credits}<p class="text-shadow">{image.credits}</p>{/if}
			</button>
			<button
				class="arrow prev"
				type="button"
				on:click={(e) => {
					e.preventDefault();
					$selectedImage = images[(images.length + (imageIndex - 1)) % images.length];
				}}
			/>
			<button
				class="arrow next"
				type="button"
				on:click={(e) => {
					e.preventDefault();
					$selectedImage = images[(imageIndex + 1) % images.length];
				}}
			/>
		{:else}
			<div>
				<button
					type="button"
					on:click={(e) => {
						e.preventDefault();
						$selectedImage = image;
					}}
				>
					<img src={image.url} alt={image.alt} title={image.title} />
				</button>
			</div>
		{/if}
	{/each}
</section>

<style>
	section {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: space-between;
	}

	img {
		box-shadow: 0 0 2em -1em #000;
		max-height: calc(100% - 2em);
		max-width: calc(100% - 2em);
		margin: 0;
		padding: 0;
	}

	button {
		background: none;
		border: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}
	div:not(.selected) {
		max-width: calc(33% - 2em);
	}
	.arrow {
		--arrow-color: #bbb;
		border-radius: 50%;
		display: flex;
		place-items: center center;
		height: 6em;
		padding: 1em;
		position: fixed;
		top: calc(50% - 2em);
		width: 6em;
	}
	.arrow:hover {
		--arrow-color: #fff;
		background: rgba(255, 255, 255, 0.3);
	}
	.arrow::before {
		content: '';
		border-left: 5px solid var(--arrow-color);
		border-bottom: 5px solid var(--arrow-color);
		margin-left: 1em;
		rotate: 45deg;
		height: 2em;
		width: 2em;
	}
	.arrow.prev {
		left: 0;
	}
	.arrow.next {
		right: 0;
		rotate: 180deg;
	}
	.selected {
		background-color: rgba(0, 0, 0, 0.8);
		box-shadow: 0 0 4em -1em var(--primary-color);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		max-width: unset;
	}
	.selected div {
		position: absolute;
		top: 2em;
		right: 2em;
		background: var(--text);
		border: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 4em;
		min-width: 4em;
		color: var(--pure-white);
		background: var(--primary-color);
	}

	.selected div span {
		transform: rotate(0deg);
		transition-duration: 1s;
		transition: all 1s ease;
	}

	.selected div:hover span {
		transform: rotate(360deg);
	}

	p {
		margin: 1em;
		padding: 2em;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50px 50px 0;
		bottom: 0;
		right: 0;
	}

	@keyframes rotater {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes reverse {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
