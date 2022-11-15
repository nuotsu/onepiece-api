import client from '$utils/sanity'
import groq from 'groq'
import { live } from '$utils/groq'

export async function load() {
	return {
		chapters: await client.fetch(groq`
			*[_type == 'chapter' && ${live}]|order(number desc){
				...,
				quotes[]{
					...,
					saidBy[]->{
						name,
						slug
					}
				}
			}
		`)
	}
}
