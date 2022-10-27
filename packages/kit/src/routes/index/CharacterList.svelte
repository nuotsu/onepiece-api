<section class="self-start md:sticky top-4">
	<h2>
		<a class="link-hover" href="/character">Characters</a>
	</h2>

	<ul class="flex flex-wrap gap-4 <md:gap-y-2">
		{#each characters as character}
			{@const isSpoiler = spoilerCheck(character, global.spoiler)}

			{#if !($spoilers && isSpoiler)}
				<li>
					<a class="link" href="/character/{character.slug.current}">
						{character.name.short}
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
	import { spoilers, spoilerCheck } from '$lib/SpoilerToggle.svelte'
	import { page } from '$app/stores'

	const { characters, global } = $page.data
</script>
