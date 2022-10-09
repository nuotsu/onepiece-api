import client from '$utils/sanity'
import groq from 'groq'
import { quote_count } from '$utils/groq'

export async function load() {
	return {
		characters: await client.fetch(groq`
			*[_type == 'character']
			|order(name.short asc)
			|order(${quote_count} desc){
				...,
				'quote_count': ${quote_count},
				'chapters': *[_type == 'chapter' && ^.slug.current in quotes[].saidBy[]->slug.current].number
			}
		`)
	}
}
