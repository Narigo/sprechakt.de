<script lang="ts">
	import Footer from './Footer.svelte';

	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div>
	<Header>
		<Navigation slot="navigation"><slot name="navigation" /></Navigation>
		<slot name="header" />
	</Header>
	<main>
		<slot />
	</main>
	<Footer>
		<slot name="footer" />
	</Footer>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
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
