<section class="section">
	<label class="flex items-center gap-[.5ch]">
		🔎
		<input
			class="w-full"
			type="search"
			placeholder="Search"
			bind:value={$query}
		/>
	</label>

	<Keywords/>

	{#if $query}
		<ResultList/>
	{/if}
</section>

<style>
	input {
		appearance: none;
		background-color: transparent;
		border-radius: 0;
	}
</style>

<script>
	import Keywords from './Keywords.svelte'
	import ResultList from './ResultList.svelte'
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const query = writable('')
</script>
