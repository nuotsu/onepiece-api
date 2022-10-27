<div class="bordered bg-paper shadow-xl shadow-ink/5">
	<h2 class="text-center text-sm">
		"<b>{$query}</b>"で検索した結果 {results.length}件該当
	</h2>

	<ul class="grid gap-[1em] max-h-[20em] overflow-y-auto mt-4 empty:hidden">
		{#each results as result (result)}
			<li><Result {result} /></li>
		{/each}
	</ul>
</div>

<script>
	import { page } from '$app/stores'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import fuzzysort from 'fuzzysort'
	import { query } from './Search.svelte'
	import Result from './Result.svelte'

	const { quotes_str, global } = $page.data

	$: all_quotes = quotes_str
		.flatMap(({ quotes, ...chapter }) => quotes?.map(q => ({
			chapter,
			...q
		})))
		.filter(q => !$spoilers || !(q.chapter.number > global.spoiler))

	$: results = fuzzysort.go($query, all_quotes, { key: 'content' })
</script>
