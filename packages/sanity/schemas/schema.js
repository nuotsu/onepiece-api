import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import chapter from './documents/chapter'
import character from './documents/character'

// objects
import quote from './objects/quote'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    chapter,
    character,

    // objects
    quote,
  ]),
})
