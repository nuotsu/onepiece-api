<section class="section">
	<h2>Updates</h2>

	<ul class="bordered max-h-[11em] <md:max-h-[15em] overflow-y-auto">
		{#each updates as update}
			{@const date = update._createdAt}

			{#if !($spoilers && update.number > global.spoiler)}
				<li>
					<time datetime={date}>{format(date).replace(/\//g, '.')}</time>
					<p>
						<a class="link" href="/chapter/{update.number}">
							{#if update.number > global.spoiler}
								<span title="※ネタバレを含む内容">⚠️</span>
							{/if}
							第{update.number}話 "{update.title}"
						</a>
						を追加。
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

	@screen <sm {
		li + li {
			margin-top: .5em;
		}

		time {
			@apply text-xs opacity-30;
		}
	}
</style>

<script>
	import { page } from '$app/stores'
	import { format } from '$lib/Date.svelte'
	import { spoilers } from '$lib/SpoilerToggle.svelte'

	const { updates, global } = $page.data
</script>
