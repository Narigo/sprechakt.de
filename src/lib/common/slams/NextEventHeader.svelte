<script lang="ts">
	export let date: string;
	export let link: string;
</script>

<div>
	<h1>Sprechakt</h1>
	<section>
		<p>
			Nächster Termin am {date}.
			<a href={link}>Mehr Informationen zum nächsten Event</a>
		</p>
	</section>
</div>

<style>
	div {
		background-image: url('$lib/index/sprechakt-bild.svg');
		background-position: right;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	div section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
	}
</style>
