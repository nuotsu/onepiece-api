<figure>
	<blockquote>
		<PortableText
			value={content}
			components={components}
		/>
	</blockquote>
	<figcaption class="text-right">
		—
		{#each saidBy as character}
			<a href="/character/{character.slug.current}">
				{character.name.short}
			</a>
		{/each}

		{#if chapter}
			<cite>({chapter.number}話 "{chapter.title}")</cite>
		{/if}
	</figcaption>
</figure>

<script>
	import { PortableText } from '@portabletext/svelte'
	import Dots from '$lib/pt/Dots.svelte'

	export let content, saidBy, chapter

	const components = {
		marks: {
			strong: Dots,
		}
	}
</script>
