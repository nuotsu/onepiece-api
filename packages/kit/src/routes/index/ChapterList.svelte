<section>
	<h2 class="heading -mb-4">Chapters</h2>

	<ul class="bordered max-h-[20em] overflow-y-auto">
		{#each chapters as chapter}
			{#if !($spoilers && chapter.number > global.spoiler)}
				{@const title = chapter.title.includes('"')
					? `「${ chapter.title }」`
					: `"${ chapter.title }"`}

				<li>
					<a class="link-hover" href="/chapter/{chapter.number}">
						第{chapter.number}話 <span class="inline-block">{title}</span>
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
