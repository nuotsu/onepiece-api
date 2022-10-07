<Head {title} />

<h1 class="text-center">{title}</h1>

<section class="section">
	<ul class="sm:columns-2 md:columns-3 gap-4">
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
	import Head from '$lib/Head.svelte'

	const title = 'キャラ一覧'

	export let data

	const { characters } = data
</script>
