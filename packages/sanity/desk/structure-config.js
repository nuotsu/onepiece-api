import S from '@sanity/desk-tool/structure-builder'
import { list, singleton } from './helpers'
import Icon from '../components/Icon'
import { orderableDocumentListDeskItem as orderableList } from '@sanity/orderable-document-list'

export default () => S.list()
	.title('Content')
	.items([
		singleton('Global', 'global').icon(Icon('⚓️')),
		list('Chapters', 'chapter'),
		list('Characters', 'character'),
		orderableList({ title: 'Keywords', type: 'keyword', icon: Icon('🔎') }),
	])
