<section class="section text-right">
	<label>
		<input
			type="checkbox"
			on:change|preventDefault={onChange}
			bind:checked={$spoilers}
		/>
		⚠️ ネタバレ防止
	</label>
</section>

<script>
	function onChange({ target }) {
		if (!target.checked) {
			if (!confirm('ネタバレを含む内容を表示します。よろしいですか？')) {
				target.checked = true
			}
		}
	}

	$: $spoilers, browser && localStorage.setItem('spoilers', $spoilers)
</script>

<script context="module">
	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'

	export const spoilers = writable(browser
		? localStorage.getItem('spoilers') === 'true'
		: true
	)
</script>
