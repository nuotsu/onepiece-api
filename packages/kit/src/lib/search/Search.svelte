<section
	class="section top-4 z-10 py-2 px-4"
	class:sticky={$query}
>
	<label class="flex items-center p-0 bordered bg-paper">
		<span class="p-2 px-4">🔎</span>
		<input
			class="w-full py-2 outline-none"
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
	section {
		perspective: 1000px;
	}

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
