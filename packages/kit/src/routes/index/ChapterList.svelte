<section>
	<h2>Chapters</h2>

	<ul>
		{#each chapters as chapter}
			<li>
				<a href="/chapter/{chapter.number}">
					{chapter.number}話 "{chapter.title}" ({chapter.quotes.length})
				</a>
			</li>
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'

	const { chapters } = $page.data
</script>
