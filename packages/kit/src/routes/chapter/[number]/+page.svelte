<Head title='第{chapter.number}話 "{chapter.title}"' />

<header class="section text-center">
	<h1>
		第{chapter.number}話
		{#if showSpoilers}
			"{chapter.title}"
		{:else}
			"<span class="spoiler-hide" title="※ネタバレを含む内容">{chapter.title}</span>"
		{/if}
	</h1>
</header>

<QuoteList>
	{#if showSpoilers}
		{#each chapter.quotes as quote}
			<Quote {...quote} {chapter} />
		{/each}
	{/if}
</QuoteList>

<script>
	import Head from '$lib/Head.svelte'
	import QuoteList from '$lib/quote/QuoteList.svelte'
	import Quote from '$lib/quote/Quote.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	export let data

	const { chapter } = data
	const { global } = $page.data

	$: showSpoilers = !($spoilers && chapter.number > global.spoiler)
</script>
