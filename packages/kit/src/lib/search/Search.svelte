<section class="section">
	<label>
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

<script>
	import Keywords from './Keywords.svelte'
	import ResultList from './ResultList.svelte'
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const query = writable('')
</script>
