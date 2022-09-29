<div class="bg-paper">
	<h2 class="text-center">{results.length} results</h2>

	<ul class="grid gap-[1em]">
		{#each results as result}
			<li><Result {result} /></li>
		{/each}
	</ul>
</div>

<style>
	div {
		border: 1px dashed;
	}
</style>

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
		.filter(q => {
			if ($spoilers) {
				return !q.chapter.spoiler
			} else {
				return true
			}
		})

	$: console.log(all_quotes)

	$: results = fuzzysort.go($query, all_quotes, { key: 'content' })
</script>
