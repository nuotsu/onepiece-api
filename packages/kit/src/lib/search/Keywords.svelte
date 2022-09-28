<fieldset class="flex flex-wrap items-end gap-[1ch]">
	{#each keywords as { text, ruby }}
		<button
			class:font-bold={$query === text}
			on:click={() => onClick(text)}
		>
			{#if ruby}
				<ruby>{text}<rt>{ruby}</rt></ruby>
			{:else}
				{text}
			{/if}
		</button>
	{/each}
</fieldset>

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
