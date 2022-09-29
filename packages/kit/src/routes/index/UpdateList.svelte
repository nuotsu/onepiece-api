<section class="section">
	<h2>Updates</h2>

	<ul>
		{#each updates as update}
			{@const date = update._createdAt}

			{#if !($spoilers && update.spoiler)}
				<li>
					<time datetime={date}>{format(date).replace(/\//g, '.')}</time>
					<p>
						<a class="link" href="/chapter/{update.number}">
							{#if update.spoiler}
								<span title="※ネタバレを含む内容">⚠️</span>
							{/if}
							{update.number}話 "{update.title}"
						</a>
						を追加しました。
					</p>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	li {
		display: grid;
		gap: 0 1em;
	}

	@screen sm {
		li {
			grid-template-columns: auto 1fr;
		}
	}
</style>

<script>
	import { page } from '$app/stores'
	import { format } from '$lib/Date.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'

	const { updates } = $page.data
</script>
