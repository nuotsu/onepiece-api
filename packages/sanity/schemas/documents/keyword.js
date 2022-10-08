import Icon from '../../components/Icon'
import { orderRankField } from '@sanity/orderable-document-list'

export default {
	name: 'keyword',
	title: 'Keyword',
	icon: Icon('🔎'),
	type: 'document',
	fields: [
		orderRankField({ type: 'keyword' }),
		{
			name: 'text',
			type: 'string',
		},
		{
			name: 'ruby',
			type: 'string',
		},
	],
	preview: {
		select: {
			title: 'text',
			subtitle: 'ruby',
		},
	},
}
