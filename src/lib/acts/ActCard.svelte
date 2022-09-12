<script lang="ts">
	import { base } from '$app/paths';
	import type { SprechAktAct } from '$lib/types';

	export let act: SprechAktAct;
</script>

<a href="{base}/infos/acts/{act.id}">{act.name}</a>
