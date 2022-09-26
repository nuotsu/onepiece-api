import Icon from '../../components/Icon'

export default {
	name: 'chapter',
	title: 'Chapter',
	icon: Icon('📕'),
	type: 'document',
	fields: [
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
		},
		prepare: ({ number, ...selection }) => ({
			subtitle: `${ number }話`,
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
