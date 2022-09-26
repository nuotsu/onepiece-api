<h1>
	{character.name.short}
	{#if character.name.full}
		<small>({character.name.full})</small>
	{/if}
</h1>

{#each filtered as chapter}
	{#each chapter.quotes as quote}
		<Quote {...quote} {chapter} />
	{/each}
{/each}

<script>
	import { page } from '$app/stores'
	import Quote from '$lib/Quote.svelte'

	export let data

	const { character, chapters } = data

	const filtered = chapters.map(({ quotes, ...chapter }) => ({
		quotes: quotes.filter(q => q.saidBy.map(s => s.slug.current).includes($page.params.slug)),
		...chapter
	}))
</script>
