<section class="self-start md:sticky top-4">
	<h2>
		<a class="link-hover" href="/character">Characters</a>
	</h2>

	<ul class="flex flex-wrap gap-y-2 gap-x-4">
		{#each characters as character}
			<li>
				<a class="link" href="/character/{character.slug.current}">
					{character.name.short}
				</a>
				<sup>({character.quote_count})</sup>
			</li>
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'

	const { characters } = $page.data
</script>
