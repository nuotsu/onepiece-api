<ul>
	{#each data.chapters as chapter}
		<li>
			<a href="/chapter/{chapter.number}">
				{chapter.number}話 "{chapter.title}" ({chapter.quotes.length})
			</a>
		</li>
	{/each}
</ul>

<script>
	export let data
</script>
