<header class="section text-center">
	<h1>
		{character.name.short}

		{#if character.name.full}
			<small>({character.name.full})</small>
		{/if}

		{#if character.name.other}
			<small>({character.name.other.join('/')})</small>
		{/if}
	</h1>
</header>

<section class="section grid gap-[1em] <sm:mx-0">
	{#each filtered as chapter}
		{#each chapter.quotes as quote}
			{#if !($spoilers && chapter.spoiler)}
				<Quote {...quote} {chapter} />
			{/if}
		{/each}
	{/each}
</section>

<script>
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'
	import Quote from '$lib/Quote.svelte'

	export let data

	const { character, chapters } = data

	const filtered = chapters.map(({ quotes, ...chapter }) => ({
		quotes: quotes.filter(q => q.saidBy.map(s => s.slug.current).includes($page.params.slug)),
		...chapter
	}))
</script>
