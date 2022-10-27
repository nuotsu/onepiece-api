<svelte:head>
	{#if title}
		<title>{title} — {name}</title>
	{:else}
		<title>{name}</title>
	{/if}
</svelte:head>

<script>
	export let title

	const name = '⊗NE PIECE 胸アツ&重要セリフ'
</script>
