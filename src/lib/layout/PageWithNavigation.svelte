<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="page">
	<div class="content">
		<Navigation slot="navigation"><slot name="navigation" /></Navigation>
		<div class="main">
			<Header>
				<slot name="header" />
			</Header>
			<main>
				<slot />
			</main>
		</div>
	</div>
	<Footer>
		<slot name="footer" />
	</Footer>
</div>

<style>
	div.page {
		align-items: stretch;
		display: flex;
		flex: 1;
		flex-direction: column;
		min-height: 100%;
	}
	div.content {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: stretch;
	}
	div.main {
		flex: 1;
	}
	main {
		flex: 1;
		padding: 2rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	main > :first-child {
		margin-top: 0;
	}
	main > :last-child {
		margin-bottom: 0;
	}
</style>
