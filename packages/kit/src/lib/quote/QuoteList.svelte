<section class="section grid gap-[1em] <sm:mx-0 items-start">
	<slot></slot>
</section>

<style>
	@screen sm {
		section {
			grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
		}
	}
</style>
