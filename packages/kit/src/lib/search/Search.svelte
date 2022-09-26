<label>
	<input
		type="search"
		placeholder="Search"
		bind:value={query}
	/>
</label>

{#if query}
	<section>
		<h2>{results.length} results</h2>

		<ul>
			{#each results as result}
				<li><Result {result} /></li>
			{/each}
		</ul>
	</section>
{/if}

<script>
	import { page } from '$app/stores'
	import { go } from 'fuzzysort'
	import Result from './Result.svelte'

	let query = ''

	const { quotes_str } = $page.data

	const all_quotes = quotes_str
		.flatMap(({ quotes, ...chapter }) => quotes.map(q => ({
			chapter,
			...q
		})))

	$: results = go(query, all_quotes, { key: 'content' })
</script>
