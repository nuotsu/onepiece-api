<section class="section max-w-screen-md mx-auto">
	<h2 class="text-center">Random Quote</h2>

	<div class="p-2 border border-bounty">
		<Quote {chapter} {...quote} />
	</div>
</section>

<script>
	import Quote from '$lib/quote/Quote.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	const { chapters, global } = $page.data

	$: resolveSpoilers = [...chapters]
		.reverse()
		.slice(0, $spoilers === 1 ? chapters.map(c => c.number).indexOf(global.spoiler) + 1 : chapters.length)

	$: ({ quotes, ...chapter } = resolveSpoilers[
		Math.floor(Math.random() * resolveSpoilers.length)
	])

	$: quote = quotes[Math.floor(Math.random() * quotes.length)]
</script>
