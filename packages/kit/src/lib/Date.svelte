<time datetime={date}>
	<slot>{format(date, { lang, options })}</slot>
</time>

<script>
	export let date, lang, options
</script>

<script context="module">
	export const format = (date, { lang, options } = { lang: 'ja' }) => new Intl
		.DateTimeFormat(lang, options)
		.format(new Date(date))
</script>
