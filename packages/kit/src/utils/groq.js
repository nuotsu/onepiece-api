import groq from 'groq'

export const live = groq`!(_id in path('drafts.*'))`

export const quote_count = groq`
	count(*[_type == 'chapter'].quotes[].saidBy[references(^._id)])
`
