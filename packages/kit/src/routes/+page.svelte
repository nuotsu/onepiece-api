<Head />

<RandomQuote/>
<Search/>
<div class="section grid md:grid-cols-2 gap-4 gap-x-8">
	<CharacterList/>
	<ChapterList/>
</div>
<UpdateList/>

<script>
	import Head from '$lib/Head.svelte'
	import RandomQuote from './index/RandomQuote.svelte'
	import Search from '$lib/search/Search.svelte'
	import CharacterList from './index/CharacterList.svelte'
	import ChapterList from './index/ChapterList.svelte'
	import UpdateList from './index/UpdateList.svelte'
</script>
