<section>
	<h2 class="heading -mb-4">Chapters</h2>

	<ul class="bordered">
		{#each chapters_filtered as chapter}
			{@const title = chapter.title.includes('"')
				? `「${ chapter.title }」`
				: `"${ chapter.title }"`}

			<li>
				<a class="link-hover" href="/chapter/{chapter.number}">
					第{chapter.number}話 <span>{title}</span>
				</a>

				<sup>({chapter.quotes?.length || 0})</sup>

				{#if chapter.number > global.spoiler}
					<sup title="※ネタバレを含む内容">⚠️</sup>
				{/if}
			</li>
		{/each}

		<li>
			<a class="link-hover text-xs" href="/chapter">Chapter一覧へ 👉</a>
		</li>
	</ul>
</section>

<style>
	span {
		display: inline-block;
		text-decoration: inherit;
	}
</style>

<script>
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	const { chapters, global } = $page.data

	$: chapters_filtered = chapters
		.filter(chapter => !($spoilers && chapter.number > global.spoiler))
		.slice(0, 10)
</script>
