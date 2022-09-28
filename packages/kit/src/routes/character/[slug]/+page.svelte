<header class="section text-center">
	<h1>
		{character.name.short}
		{#if character.name.full}
			<small>({character.name.full})</small>
		{/if}
	</h1>
</header>

<section class="section grid gap-[1em]">
	{#each filtered as chapter}
		{#each chapter.quotes as quote}
			<Quote {...quote} {chapter} />
		{/each}
	{/each}
</section>

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
