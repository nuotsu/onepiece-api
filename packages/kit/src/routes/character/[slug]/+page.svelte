<Head title={character.name.short} />

<header class="section text-center">
	<h1>
		{character.name.short}

		{#if names.length}
			<small>
				({#each names as name, i}<span>{name}</span>{#if i < names.length-1}/{/if}{/each})
			</small>
		{/if}
	</h1>
</header>

<section class="section grid gap-[1em] <sm:mx-0 items-start">
	{#each chapters as chapter}
		{#each chapter.quotes as quote}
			{#if !($spoilers && chapter.spoiler)}
				<Quote {...quote} {chapter} />
			{/if}
		{/each}
	{/each}
</section>

<style>
	span {
		display: inline-block;
	}

	@screen sm {
		section {
			grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
		}
	}
</style>

<script>
	import Head from '$lib/Head.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import Quote from '$lib/Quote.svelte'

	export let data

	const { character, chapters } = data

	const names = [character.name.full, ...character.name.other || []].filter(Boolean)
</script>
