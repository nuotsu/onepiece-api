<Head {title} />

<header>
	<h1 class="h1 mx-auto">{title}</h1>
</header>

<SortBy/>

<section class="section">
	<ul class="sm:columns-2 md:columns-3 gap-4">
		{#each characters_sorted as character (character._id)}
			{@const isSpoiler = spoilerCheck(character, global.spoiler)}
			{@const { short, full } = character.name}

			{#if !($spoilers && isSpoiler)}
				<li>
					<a class="link" href="/character/{character.slug.current}">
						{#if $sortBy === 'short'}
							{short}

							{#if full}
								<small>({full})</small>
							{/if}
						{:else}
							{full || short}

							{#if full}
								<small>({short})</small>
							{/if}
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
	import SortBy, { sortBy } from './SortBy.svelte'
	import { spoilers, spoilerCheck } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	export let data

	const { characters } = data
	const { global } = $page.data

	const title = 'キャラ一覧'

	$: characters_sorted = characters.sort((a, b) => {
		const { short: a_short, full: a_full } = a.name
		const { short: b_short, full: b_full } = b.name

		if ($sortBy === 'short') {
			return (a_short).localeCompare(b_short)
		} else {
			return (a_full || a_short).localeCompare(b_full || b_short)
		}
	})
</script>
