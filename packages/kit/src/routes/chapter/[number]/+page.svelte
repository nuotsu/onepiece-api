<header class="section text-center">
	<h1>{chapter.number}話 "{chapter.title}"</h1>
</header>

<section class="section grid gap-[1em]">
	{#each chapter.quotes as quote}
		<Quote {...quote} />
	{/each}
</section>

<script>
	import Quote from '$lib/Quote.svelte'

	export let data

	const { chapter } = data
</script>
