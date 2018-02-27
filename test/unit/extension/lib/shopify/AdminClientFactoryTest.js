const ShopifyAdminClientFactory = require('../../../../../extension/lib/shopify/AdminClientFactory')
const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const assert = require('assert')

describe('ShopifyAdminClientFactory', () => {
  it('should create instance of ShopgateAdminClient', () => {
    const shopifyAdminClientFactory = new ShopifyAdminClientFactory('1234567890987654321', 'test-shop-domain')
    const shopifyAdminClient = shopifyAdminClientFactory.create()

    assert.ok(shopifyAdminClient instanceof ShopifyAdminClient)
  })
})
