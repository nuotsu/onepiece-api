<svelte:head>
	<title>⊗NE PIECE</title>
</svelte:head>

<Search/>
<ChapterList/>
<CharacterList/>
<UpdateList/>

<script>
	import Search from '$lib/search/Search.svelte'
	import ChapterList from './index/ChapterList.svelte'
	import CharacterList from './index/CharacterList.svelte'
	import UpdateList from './index/UpdateList.svelte'
</script>
