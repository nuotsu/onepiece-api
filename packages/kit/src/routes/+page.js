import client from '$utils/sanity'
import groq from 'groq'
import { quote_count } from '$utils/groq'

export async function load() {
	const data = await client.fetch(groq`{
		'chapters': *[_type == 'chapter']|order(number desc),

		'characters': *[_type == 'character' && ${quote_count} > 1]
		|order(name.short asc)
		|order(${quote_count} desc)
		{
			...,
			'quote_count': ${quote_count}
		},

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
