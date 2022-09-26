<h1><ruby>One Piece<rt>ワンピース</rt></ruby> API</h1>

<ul>
	{#each data.chapters as chapter}
		<li>
			{chapter.number}話 "{chapter.title}" ({chapter.quotes.length})
		</li>
	{/each}
</ul>

<script>
	export let data
</script>
