<h1>{chapter.number}話 "{chapter.title}"</h1>

{#each chapter.quotes as quote}
	<Quote {...quote} />
{/each}

<script>
	import Quote from '$lib/Quote.svelte'

	export let data

	const { chapter } = data
</script>
