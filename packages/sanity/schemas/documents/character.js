import Icon from '../../components/Icon'

export default {
	name: 'character',
	title: 'Character',
	icon: Icon('👤'),
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'object',
			fields: [
				{
					name: 'full',
					type: 'string',
				},
				{
					name: 'short',
					type: 'string',
					validation: Rule => Rule.required(),
				},
				{
					name: 'other',
					type: 'array',
					of: [{ type: 'string' }],
				},
			],
		},
	],
	preview: {
		select: {
			title: 'name.short',
			subtitle: 'name.full',
		},
	},
	orderings: [
		{
			title: 'Name',
			name: 'name.short',
			by: [{field: 'name.short', direction: 'asc'}],
			default: true,
		},
	],
}
