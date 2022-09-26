export default {
	name: 'quote',
	title: 'Quote',
	type: 'object',
	fields: [
		{
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
					marks: {
						decorators: [{ title: 'Strong', value: 'strong' }],
						annotations: [],
					}
				}
			],
		},
		{
			name: 'saidBy',
			title: 'Said by',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{ type: 'character' },
					]
				}
			],
		},
	],
	preview: {
		select: {
			title: 'content',
			subtitle: 'saidBy.0.name.short',
		},
	},
}
