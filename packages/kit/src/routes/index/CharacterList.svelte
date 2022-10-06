<section class="section">
	<h2>Characters</h2>

	<ul class="flex flex-wrap gap-x-4">
		{#each characters as character}
			<li>
				<a class="link" href="/character/{character.slug.current}">
					{character.name.short}
					<sup>({character.quote_count})</sup>
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'

	const { characters } = $page.data
</script>
