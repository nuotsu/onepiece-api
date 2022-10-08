import Icon from '../../components/Icon'
import { spoiler } from '../../components/data'

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
			subtitle: `第${ number }話`,
			media: Icon(number > spoiler ? '⚠️' : '📕'),
			...selection
		}),
	},
	orderings: [
		{
			title: 'Newest',
			name: 'newest',
			by: [{field: 'number', direction: 'desc'}],
			default: true,
		},
		{
			title: 'Oldest',
			name: 'oldest',
			by: [{field: 'number', direction: 'asc'}],
		},
		{
			title: 'Title',
			name: 'title',
			by: [{field: 'title', direction: 'asc'}],
		},
	],
}
