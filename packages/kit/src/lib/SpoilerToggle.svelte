<section class="section text-right">
	<fieldset class="bordered py-2 px-4 max-w-max ml-auto">
		<legend>⚠️ ネタバレ内容を:</legend>

		<label class:underline={$spoilers}>
			<input type="radio" hidden
				name="spoilers"
				value={1}
				bind:group={$spoilers}
				checked={$spoilers}
			/>
			🫣 隠す
		</label>
		/
		<label class:underline={!$spoilers} on:click|preventDefault={onChange}>
			<input type="radio" hidden
				name="spoilers"
				value={0}
				bind:group={$spoilers}
				checked={!$spoilers}
			/>
			表示する 👀
		</label>
	</fieldset>
</section>

<script>
	function onChange() {
		if ($spoilers) {
			if (confirm('ネタバレを含む内容を表示します。よろしいですか？')) {
				$spoilers = false
			}
		}
	}

	$: $spoilers, browser && localStorage.setItem('spoilers', $spoilers)
</script>

<script context="module">
	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'

	export const spoilers = writable(browser
		? JSON.parse(localStorage.getItem('spoilers'))
		: true
	)

	export function spoilerCheck(character, cap) {
		return character.chapters.every(c => c > cap)
	}
</script>
