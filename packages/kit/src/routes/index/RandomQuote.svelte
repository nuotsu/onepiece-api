<section class="section max-w-screen-md mx-auto">
	<h2 class="heading -mb-2 text-center">Random Quote</h2>

	<div class="bordered p-2">
		{#key random}
			<Quote centered {...random} {hideSource} />
		{/key}
	</div>

	<p class="flex gap-[1em] justify-end text-xs mt-1">
		<label>
			<input type="checkbox" bind:checked={hideSource} />
			引用元を隠す
		</label>

		<button class="link-hover" on:click={() => { random = getRandom() }}>
			🔀 Randomize
		</button>
	</p>
</section>

<style>
	div > :global(*) {
		animation: appear 0.2s ease-in-out forwards;
	}

	@keyframes appear {
		from {
			opacity: 0;
			translate: -1rem 0;
		}
	}
</style>

<script>
	import Quote from '$lib/quote/Quote.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	const { chapters, global } = $page.data

	let hideSource = false

	let random = getRandom()

	function getRandom() {
		const resolveSpoilers = [...chapters]
			.reverse()
			.slice(0, $spoilers ? chapters.map(c => c.number).indexOf(global.spoiler) + 1 : chapters.length)

		const { quotes, ...chapter } = resolveSpoilers[
			Math.floor(Math.random() * resolveSpoilers.length)
		]

		const quote = quotes[Math.floor(Math.random() * quotes.length)]

		return {
			chapter,
			...quote
		}
	}
</script>
