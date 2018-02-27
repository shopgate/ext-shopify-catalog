const assert = require('assert')
const StoreFrontApiFactory = require('../../extension/lib/shopify/StorefrontClientFactory')

describe('StoreFrontApiFactory', () => {
  it('should return an instance of GraphQlClient that is able to contact the Shopify Storefront API', async () => {
    const storeFrontApiFactory = new StoreFrontApiFactory('dd4d4dc146542ba7763305d71d1b3d38', 'graphql')

    const graphQlClient = storeFrontApiFactory.create()

    const query = graphQlClient.query((root) => {
      root.add('shop', (shop) => {
        shop.add('name')
      })
    })

    const response = await graphQlClient.send(query)

    assert.equal('graphql', response.data.shop.name)
  })
})
