<Head title={character.name.short} />

<header class="section text-center">
	<h1 class="h1 mx-auto">
		{character.name.short}

		{#if names.length}
			<small class="font-normal">
				({#each names as name, i}<span>{name}</span>{#if i < names.length-1}/{/if}{/each})
			</small>
		{/if}
	</h1>
</header>

<QuoteList>
	{#each chapters as chapter}
		{#each chapter.quotes as quote}
			{#if !($spoilers && chapter.number > global.spoiler)}
				<Quote {...quote} {chapter} />
			{/if}
		{/each}
	{/each}
</QuoteList>

<style>
	span {
		display: inline-block;
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import QuoteList from '$lib/quote/QuoteList.svelte'
	import Quote from '$lib/quote/Quote.svelte'
	import { page } from '$app/stores'

	export let data

	$: ({ character, chapters } = data)
	$: ({ global } = $page.data)

	$: names = [character.name.full, ...character.name.other || []].filter(Boolean)
</script>
