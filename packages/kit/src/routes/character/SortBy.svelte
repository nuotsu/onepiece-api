<section class="section text-right">
	<label>
		並び替え:
		<select class="text-center bordered bg-transparent py-0 px-2" bind:value={$sortBy}>
			<option value="full">フルネーム</option>
			<option value="short">名前</option>
		</select>
	</label>
</section>

<script context="module">
	import { writable } from 'svelte/store'

	export const sortBy = writable('full')
</script>
