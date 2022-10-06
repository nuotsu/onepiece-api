<fieldset class="flex flex-wrap items-end gap-[1em] py-2 px-4 bg-gray-200 text-sm">
	{#each keywords as { text, ruby }}
		<button
			class:font-bold={$query === text}
			on:click={() => onClick(text)}
		>
			<span class="opacity-30">#</span>
			{#if ruby}
				<ruby>{text}<rt>{ruby}</rt></ruby>
			{:else}
				{text}
			{/if}
		</button>
	{/each}
</fieldset>

<style>
	button {
		display: flex;
		align-items: flex-end;
	}
</style>

<script>
	import { query } from './Search.svelte'

	const keywords = [
		{ text: 'ひとつなぎの大秘宝', ruby: 'ワンピース' },
		{ text: '歴史の本文', ruby: 'ポーネグリフ' },
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
