import groq from 'groq'

export const quote_count = groq`
	count(*[_type=='chapter'].quotes[].saidBy[references(^._id)])
`
