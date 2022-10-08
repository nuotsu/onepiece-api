import client from '$utils/sanity'
import groq from 'groq'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const { slug } = params

	const data = await client.fetch(groq`{
		'character': *[_type == 'character' && slug.current == $slug][0],
		'chapters': *[_type == 'chapter' && $slug in quotes[].saidBy[]->slug.current]|order(number asc){
			...,
			quotes[$slug in saidBy[]->slug.current]{
				...,
				saidBy[]->
			}
		},
	}`, { slug })

	if (data?.character) return {
		...data
	}

	throw error(404, 'Character not found')
}
