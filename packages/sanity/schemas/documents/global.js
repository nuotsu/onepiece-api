export default {
	name: 'global',
	title: 'Global',
	type: 'document',
	__experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
	fields: [
		{
			name: 'spoiler',
			title: 'Spoiler cap',
			type: 'number',
		},
	],
	preview: {
		prepare: () => ({
			title: 'Global',
		})
	},
}
