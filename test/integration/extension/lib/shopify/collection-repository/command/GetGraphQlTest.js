const assert = require('assert')
const StoreFrontApiFactory = require('../../../../../../../extension/lib/shopify/StorefrontClientFactory')
const GetGraphQL = require('../../../../../../../extension/lib/shopify/collection-repository/command/GetGraphQl')
const IdentifierConverter = require('../../../../../../../extension/lib/shopify/collection-repository/command/category/IdentifierConverter')
const integrationCredentials = require('../../../../../../../.integration-credentials')

describe('GetGraphQl Command', () => {
  it('should return collection data', async () => {
    const storeFrontApiFactory = new StoreFrontApiFactory(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)

    const shopifyStorefrontClient = storeFrontApiFactory.create()

    const getCommand = new GetGraphQL(shopifyStorefrontClient, new IdentifierConverter())

    const category = await getCommand.execute('integration-test-do-no-touch')

    assert.equal('30963826751', category.id)
    assert.equal('Integration-Test *Do no touch*', category.title)
    assert.equal('integration-test-do-no-touch', category.handle)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', category.image)
  })
})
