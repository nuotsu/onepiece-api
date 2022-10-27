<Head {title} />

<header>
	<h1 class="h1 mx-auto">{title}</h1>
</header>

<section class="section">
	<ul class="sm:columns-2 md:columns-3 gap-4">
		{#each characters as character}
			{@const isSpoiler = spoilerCheck(character, global.spoiler)}

			{#if !($spoilers && isSpoiler)}
				<li>
					<a class="link" href="/character/{character.slug.current}">
						{character.name.short}

						{#if character.name.full}
							<small>({character.name.full})</small>
						{/if}
					</a>

					<sup>({character.quote_count})</sup>

					{#if isSpoiler}
						<sup title="※ネタバレを含む内容">⚠️</sup>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</section>

<script>
	import Head from '$lib/Head.svelte'
	import { spoilers, spoilerCheck } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	export let data

	const { characters } = data
	const { global } = $page.data

	const title = 'キャラ一覧'
</script>
