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
						{#if chapter.number > global.spoiler}
							<span title="※ネタバレを含む内容">⚠️</span>
						{/if}
						第{chapter.number}話 {title}
					</a>
					<sup>({chapter.quotes?.length || 0})</sup>
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
