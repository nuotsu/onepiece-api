<figure class="bg-bounty p-2">
	<blockquote>
		{#if content}
			<PortableText
				value={content}
				components={components}
			/>
		{/if}

		{#if quote}
			<p>{@html quote}</p>
		{/if}
	</blockquote>

	<figcaption class="text-right <sm:text-xs">
		—
		{#each saidBy as character}
			<a class="link-hover" href="/character/{character.slug.current}">
				{character.name.short}
			</a>
		{/each}

		{#if chapter}
			<cite>
				<a class="link-hover" href="/chapter/{chapter.number}">
					({chapter.number}話 "{chapter.title}")
				</a>
			</cite>
		{/if}
	</figcaption>
</figure>

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
