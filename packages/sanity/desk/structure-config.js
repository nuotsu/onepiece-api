import S from '@sanity/desk-tool/structure-builder'
import { group, list, singleton } from './helpers'
import Icon from '../components/Icon'

export default () => S.list()
	.title('Content')
	.items([
		list('Chapters', 'chapter').icon(Icon('📕')),
		list('Characters', 'character').icon(Icon('🗣')),
	])
