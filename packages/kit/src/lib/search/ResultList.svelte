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
	import { go } from 'fuzzysort'
	import { query } from './Search.svelte'
	import Result from './Result.svelte'

	const { quotes_str } = $page.data

	const all_quotes = quotes_str
		.flatMap(({ quotes, ...chapter }) => quotes.map(q => ({
			chapter,
			...q
		})))

	$: results = go($query, all_quotes, { key: 'content' })
</script>
