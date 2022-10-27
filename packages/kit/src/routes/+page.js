import client from '$utils/sanity'
import groq from 'groq'
import { live, quote_count } from '$utils/groq'

export async function load() {
	const data = await client.fetch(groq`{
		'keywords': *[_type == 'keyword']|order(orderRank asc){
			text, ruby
		},

		'chapters': *[_type == 'chapter' && ${live}]|order(number desc){
			...,
			quotes[]{
				...,
				saidBy[]->{
					name,
					slug
				}
			}
		},

		'characters': *[_type == 'character' && ${live} && ${quote_count} > 2]
		|order(name.short asc)
		|order(${quote_count} desc)
		{
			...,
			'quote_count': ${quote_count},
			'chapters': *[_type == 'chapter' && ^.slug.current in quotes[].saidBy[]->slug.current].number
		},

		'quotes_str': *[_type == 'chapter' && ${live}]{
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

		'updates': *[_type == 'chapter' && ${live}]|order(_createdAt desc){
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
