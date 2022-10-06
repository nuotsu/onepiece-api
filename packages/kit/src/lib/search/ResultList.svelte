<div class="bordered bg-paper">
	<h2 class="text-center">
		"{$query}"で検索した結果 {results.length}件該当
	</h2>

	<ul class="grid gap-[1em] max-h-[20em] overflow-y-auto mt-4 empty:hidden">
		{#each results as result}
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

	const { quotes_str } = $page.data

	$: all_quotes = quotes_str
		.flatMap(({ quotes, ...chapter }) => quotes.map(q => ({
			chapter,
			...q
		})))
		.filter(q => !$spoilers || !q.chapter.spoiler)

	$: console.log(all_quotes)

	$: results = fuzzysort.go($query, all_quotes, { key: 'content' })
</script>
