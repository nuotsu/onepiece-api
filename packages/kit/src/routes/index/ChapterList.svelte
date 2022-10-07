<section class="section">
	<h2>Chapters</h2>

	<ul>
		{#each chapters as chapter}
			{#if !($spoilers && chapter.spoiler)}
				<li>
					<a class="link-hover" href="/chapter/{chapter.number}">
						{#if chapter.spoiler}
							<span title="※ネタバレを含む内容">⚠️</span>
						{/if}
						第{chapter.number}話 "{chapter.title}"
					</a>
					<sup>({chapter.quotes.length})</sup>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'
	import { spoilers } from '$lib/SpoilerToggle.svelte'

	const { chapters } = $page.data
</script>
