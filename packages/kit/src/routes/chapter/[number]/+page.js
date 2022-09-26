import client from '$utils/sanity'
import groq from 'groq'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const { number } = params

	const chapter = await client.fetch(groq`
		*[_type == 'chapter' && number == ${ number }][0]{
			...,
			quotes[]{
				...,
				saidBy[]->
			}
		}
	`)

	if (chapter) return {
		chapter
	}

	throw error(404, 'Not found')
}
