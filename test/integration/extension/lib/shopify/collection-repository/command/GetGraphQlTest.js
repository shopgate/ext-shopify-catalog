const assert = require('assert')
const storeFrontApiClient = require('../../../../../../../extension/lib/shopify/StorefrontClient')
const GetGraphQL = require('../../../../../../../extension/lib/shopify/collection-repository/command/GetGraphQl')
const integrationCredentials = require('../../../../../../../.integration-credentials')

describe('GetGraphQl Command', () => {
  it('should return collection data', async () => {
    const shopifyStorefrontClient = storeFrontApiClient.createClient(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)

    const getCommand = new GetGraphQL(shopifyStorefrontClient)

    const category = await getCommand.execute('integration-test-do-no-touch')

    assert.equal('30963826751', category.id)
    assert.equal('Integration-Test *Do no touch*', category.title)
    assert.equal('integration-test-do-no-touch', category.handle)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', category.image)
  })
})
