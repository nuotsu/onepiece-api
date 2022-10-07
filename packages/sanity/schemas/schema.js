import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import global from './documents/global'
import chapter from './documents/chapter'
import character from './documents/character'

// objects
import quote from './objects/quote'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    global,
    chapter,
    character,

    // objects
    quote,
  ]),
})
