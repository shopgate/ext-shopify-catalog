const assert = require('assert')
const {clientFactory} = require('../../../../../extension/lib/shopify/StorefrontClient')

describe('StoreFrontApiFactory', () => {
  it('should return an instance of GraphQlClient that is able to contact the Shopify Storefront API', async () => {
    const graphQlClient = clientFactory('351c122017d0f2a957d32ae728ad749c', 'graphql')

    const query = graphQlClient.query((root) => {
      root.add('shop', (shop) => {
        shop.add('name')
      })
    })

    const response = await graphQlClient.send(query)

    assert.equal('graphql', response.data.shop.name)
  })
})
