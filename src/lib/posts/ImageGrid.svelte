<script lang="ts">
	import type { Attachment } from 'airtable/lib/attachment';

	export let images: readonly Attachment[];
</script>

{#each images as image}
	<img src={image.url} alt="Eindruck vom Event" />
{/each}
