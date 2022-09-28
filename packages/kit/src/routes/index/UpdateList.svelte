<section class="section">
	<h2>Updates</h2>

	<ul>
		{#each updates as update}
			{@const date = update._createdAt}
			<li>
				<time datetime={date}>{format(date).replace(/\//g, '.')}</time>
				<p>
					<a class="link" href="/chapter/{update.number}">
						{update.number}話 "{update.title}"
					</a>
					を追加しました。
				</p>
			</li>
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'
	import { format } from '$lib/Date.svelte'

	const { updates } = $page.data
</script>
