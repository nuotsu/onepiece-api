import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	const chapters = await client.fetch(groq`
		*[_type == 'chapter']|order(number desc)
	`)

	return {
		chapters,
	}
}
