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

<section class="section grid gap-[1em] <sm:mx-0 items-start">
	{#if showSpoilers}
		{#each chapter.quotes as quote}
			<Quote {...quote} {chapter} />
		{/each}
	{/if}
</section>

<style>
	@screen sm {
		section {
			grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import Quote from '$lib/Quote.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'

	export let data

	const { chapter } = data

	$: showSpoilers = !($spoilers && chapter.spoiler)
</script>
