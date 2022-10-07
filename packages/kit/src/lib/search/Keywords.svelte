<fieldset class="flex flex-wrap items-end gap-x-[.5em] py-2 px-4 bg-bounty text-sm">
	{#each keywords as { text, ruby }}
		<button
			class:selected={$query === text}
			on:click={() => onClick(text)}
		>
			<span class="opacity-30">#</span>
			{#if ruby}
				<ruby>{text}<rt>{ruby}</rt></ruby>
			{:else}
				<span>{text}</span>
			{/if}
		</button>
	{/each}
</fieldset>

<style>
	button {
		position: relative;
		display: flex;
		align-items: flex-end;
		padding: 0.25em .5em;
	}

	button * {
		position: relative;
		z-index: 1;
	}

	button::before {
		content: '';
		position: absolute;
		inset:  auto 0 0;
		z-index: 0;
		height: calc(1.3em + .5em);
		@apply bg-white rounded-full;
	}

	.selected {
		@apply text-paper before:bg-accent;
	}

	.selected rt {
		@apply text-accent;
	}
</style>

<script>
	import { query } from './Search.svelte'

	const keywords = [
		{ text: 'ひとつなぎの大秘宝', ruby: 'ワンピース' },
		{ text: '自由' },
		{ text: '歴史の本文', ruby: 'ポーネグリフ' },
		{ text: 'ゴムゴムの実' },
		{ text: '王' },
	]

	function onClick(text) {
		if ($query === text) {
			$query = ''
		} else {
			$query = text
		}
	}
</script>
