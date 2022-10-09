<section>
	<h2>Chapters</h2>

	<ul>
		{#each chapters as chapter}
			{#if !($spoilers && chapter.number > global.spoiler)}
				{@const title = chapter.title.includes('"')
					? `「${ chapter.title }」`
					: `"${ chapter.title }"`}

				<li>
					<a class="link-hover" href="/chapter/{chapter.number}">
						第{chapter.number}話 {title}
					</a>

					<sup>({chapter.quotes?.length || 0})</sup>

					{#if chapter.number > global.spoiler}
						<sup title="※ネタバレを含む内容">⚠️</sup>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</section>

<script>
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	const { chapters, global } = $page.data
</script>
