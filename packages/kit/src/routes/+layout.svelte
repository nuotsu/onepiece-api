<Header/>
<SpoilerAlert/>
<slot></slot>
<Footer/>

<script>
	import Header from '$lib/Header.svelte'
	import SpoilerAlert from '$lib/SpoilerToggle.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../styles/app.css'
</script>
