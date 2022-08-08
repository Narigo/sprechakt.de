<script lang="ts">
	import slamsDb from '$data/slams.json';
	import { getNextEvents } from '$lib/common/events';
	import EventSection from '$lib/index/EventSection.svelte';
	const events = getNextEvents(slamsDb);
</script>

<EventSection {events} />
