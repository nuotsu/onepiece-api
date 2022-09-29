import client from '$utils/sanity'
import groq from 'groq'

export async function load() {
	const data = await client.fetch(groq`{
		'chapters': *[_type == 'chapter']|order(number desc),

		'quotes_str': *[_type == 'chapter']{
			spoiler,
			number,
			title,
			quotes[]{
				'content': pt::text(content),
				saidBy[]->{
					name,
					slug
				}
			}
		},

		'updates': *[_type == 'chapter']|order(_createdAt desc){
			_createdAt,
			spoiler,
			number,
			title,
		}
	}`)

	return {
		...data
	}
}
