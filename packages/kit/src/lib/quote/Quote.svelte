<figure>
	<blockquote>
		{#if content}
			<PortableText
				value={content}
				components={components}
			/>
		{/if}

		{#if quote}
			<p>{@html quote.replace(/\n/g, ' ')}</p>
		{/if}
	</blockquote>

	<figcaption class="text-right text-xs mt-2">
		—
		{#each saidBy as character, i}
			<a class="link-hover" href="/character/{character.slug.current}">{character.name.short}</a><!--
			-->{#if i < saidBy.length - 1}{', '}{/if}
		{/each}

		{#if chapter}
			<cite>
				<a class="link-hover" href="/chapter/{chapter.number}">
					(第{chapter.number}話 "{chapter.title}")
				</a>
			</cite>
		{/if}
	</figcaption>
</figure>

<style>
	figure {
		background-image: url(/bg-bounty.jpg);
		background-size: 800px 82px;

		@apply relative bg-bounty p-4;
	}

	figure:not(:hover) :global(.embed) {
		display: none;
	}
</style>

<script>
	import { PortableText } from '@portabletext/svelte'
	import Dots from '$lib/pt/Dots.svelte'

	export let quote, content, saidBy, chapter

	const components = {
		marks: {
			strong: Dots,
		}
	}
</script>
