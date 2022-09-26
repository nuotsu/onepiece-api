<h1>{chapter.number}話 "{chapter.title}"</h1>

{#each chapter.quotes as quote}
	<figure>
		<blockquote>
			<PortableText
				value={quote.content}
				components={components}
			/>
		</blockquote>
		<figcaption class="text-right">
			—
			{#each quote.saidBy as character}
				<a href="/character/{character.slug.current}">
					{character.name.short}
				</a>
			{/each}
		</figcaption>
	</figure>
{/each}

<script>
	import { PortableText } from '@portabletext/svelte'
	import Dots from '$lib/pt/Dots.svelte'

	export let data

	const { chapter } = data

	const components = {
		marks: {
			strong: Dots,
		}
	}
</script>
