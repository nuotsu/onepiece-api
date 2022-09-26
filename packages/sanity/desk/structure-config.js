import S from '@sanity/desk-tool/structure-builder'
import { group, list, singleton } from './helpers'

export default () => S.list()
	.title('Content')
	.items([
		list('Chapters', 'chapter'),
		list('Characters', 'character'),
	])
