<Quote
	quote={highlight(result, '<mark>', '</mark>')}
	{saidBy}
	{chapter}
/>

<script>
	import { highlight } from 'fuzzysort'
	import Quote from '../Quote.svelte'

	export let result

	const { saidBy, chapter } = result.obj
</script>
