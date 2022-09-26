import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		chapters: await client.fetch(groq`
			*[_type == 'chapter']|order(number desc)
		`),
	}
}
