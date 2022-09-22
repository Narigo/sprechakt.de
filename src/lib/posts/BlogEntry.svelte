<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { getActNameById } from '$lib/common/acts';
	import type { SprechAktBlog } from '$lib/types';
	export let entry: SprechAktBlog;
</script>

<h2>
	{entry.title}
</h2>
<article>
	<p>geschrieben von {entry.authors.map((id) => getActNameById(id)).join(', ')}</p>
	<SvelteMarkdown source={entry.body} />
</article>
