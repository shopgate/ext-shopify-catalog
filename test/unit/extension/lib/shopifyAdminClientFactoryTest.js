const ShopifyAdminClientFactory = require('../../../../extension/lib/shopifyAdminClientFactory')
const assert = require('assert')

describe('Project', () => {
  let context = {
    config: {
      shopDomain: 'test-shop-domain',
      token: '1234567890987654321'
    }
  }
  it('should create instance of ShopgateAdminClient', () => {
    const shopifyAdminClientFactory = new ShopifyAdminClientFactory(context)
    const shopifyAdminClient = shopifyAdminClientFactory.createAdminClient()
    assert.equal(typeof shopifyAdminClient, 'object')
  })
})
