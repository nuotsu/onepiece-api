<section>
	<label>
		<input
			class="w-full"
			type="search"
			placeholder="Search"
			bind:value={$query}
		/>
	</label>

	<Keywords/>

	{#if $query}
		<div class="results">
			<h2>{results.length} results</h2>

			<ul>
				{#each results as result}
					<li><Result {result} /></li>
				{/each}
			</ul>
		</div>
	{/if}
</section>

<style>
	.results {
		border: 1px solid;
	}
</style>

<script>
	import { page } from '$app/stores'
	import { go } from 'fuzzysort'
	import Keywords from './Keywords.svelte'
	import Result from './Result.svelte'

	const { quotes_str } = $page.data

	const all_quotes = quotes_str
		.flatMap(({ quotes, ...chapter }) => quotes.map(q => ({
			chapter,
			...q
		})))

	$: results = go($query, all_quotes, { key: 'content' })
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const query = writable('')
</script>
