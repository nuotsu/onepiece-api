import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	return {
		global: client.fetch(groq`*[_type == 'global'][0]`),
	}
}
