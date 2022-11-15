<Head {title} />

<header>
	<h1 class="h1 mx-auto">{title}</h1>
</header>

<section class="section">
	<ul class="sm:columns-2 md:columns-3 gap-4">
		{#each chapters as chapter}
			{#if !($spoilers && chapter.number > global.spoiler)}
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
			{/if}
		{/each}
	</ul>
</section>

<script>
	import Head from '$lib/Head.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	export let data

	const { chapters } = data
	const { global } = $page.data

	const title = 'Chapter一覧'
</script>
