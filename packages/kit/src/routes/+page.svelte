<svelte:head>
	<title>⊗NE PIECE</title>
</svelte:head>

<Search/>
<CharacterList/>
<ChapterList/>
<UpdateList/>

<script>
	import Search from '$lib/search/Search.svelte'
	import CharacterList from './index/CharacterList.svelte'
	import ChapterList from './index/ChapterList.svelte'
	import UpdateList from './index/UpdateList.svelte'
</script>
