const IdentifierConverter = require('../../../../../../../../extension/lib/shopify/collection-repository/command/category/IdentifierConverter')
const assert = require('assert')

describe('IdentifierConverter', () => {
  it('should convert a grapQlUid to a collectionId', () => {
    const identifierConverter = new IdentifierConverter()

    assert.equal(431422869, identifierConverter.convert(Buffer.from('gid://shopify/Collection/431422869').toString('base64')))
  })
})
