const assert = require('assert')
const StoreFrontApiFactory = require('../../../../../../../extension/lib/shopify/StorefrontClientFactory')
const ListGraphQl = require('../../../../../../../extension/lib/shopify/collection-repository/command/ListGraphQl')
const integrationCredentials = require('../../../../../../../.integration-credentials')

describe('ListGraphQl Command', () => {
  it('should return data', async () => {
    const testHandle = 'integration-test-do-no-touch'
    const storeFrontApiFactory = new StoreFrontApiFactory(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)

    const shopifyStorefrontClient = storeFrontApiFactory.create()

    const listCommand = new ListGraphQl(shopifyStorefrontClient)

    const categories = await listCommand.execute()
    const testCategory = categories.find(category => {
      return category.handle === testHandle
    })

    assert.equal('Integration-Test *Do no touch*', testCategory.title)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', testCategory.image)
  })
})
