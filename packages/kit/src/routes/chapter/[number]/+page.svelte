<header class="section text-center">
	<h1>
		{chapter.number}話
		{#if showSpoilers}
			"{chapter.title}"
		{:else}
			"<span class="spoiler-hide" title="※ネタバレを含む内容">{chapter.title}</span>"
		{/if}
	</h1>
</header>

<section class="section grid gap-[1em] <sm:mx-0">
	{#if showSpoilers}
		{#each chapter.quotes as quote}
			<Quote {...quote} {chapter} />
		{/each}
	{/if}
</section>

<script>
	import Quote from '$lib/Quote.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'

	export let data

	const { chapter } = data

	$: showSpoilers = !($spoilers && chapter.spoiler)
</script>
