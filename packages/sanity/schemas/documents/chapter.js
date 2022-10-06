import Icon from '../../components/Icon'

export default {
	name: 'chapter',
	title: 'Chapter',
	icon: Icon('📕'),
	type: 'document',
	fields: [
		{
			name: 'spoiler',
			type: 'boolean',
			default: true,
		},
		{
			name: 'number',
			type: 'number',
			validation: Rule => Rule.min(0).required(),
		},
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'quotes',
			type: 'array',
			of: [{ type: 'quote' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			number: 'number',
			spoiler: 'spoiler',
		},
		prepare: ({ number, spoiler, ...selection }) => ({
			subtitle: `第${ number }話`,
			media: Icon(spoiler ? '📓' : '📕'),
			...selection
		}),
	},
	orderings: [
		{
			title: 'Chapter',
			name: 'number',
			by: [{field: 'number', direction: 'desc'}],
			default: true,
		},
		{
			title: 'Title',
			name: 'title',
			by: [{field: 'title', direction: 'asc'}],
		},
	],
}
