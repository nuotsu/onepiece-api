import client from '$utils/sanity'
import groq from 'groq'
import { quote_count } from '$utils/groq'

export async function load() {
	return {
		characters: await client.fetch(groq`
			*[_type == 'character']{
				...,
				'quote_count': ${quote_count},
				'chapters': *[_type == 'chapter' && ^.slug.current in quotes[].saidBy[]->slug.current].number
			}
		`)
	}
}
