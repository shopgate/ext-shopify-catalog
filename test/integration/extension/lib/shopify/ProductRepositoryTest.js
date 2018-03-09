const ShopifyProductRepository = require('../../../../../extension/lib/shopify/ProductRepository')
const ShopifyProductRepositoryCommandFactory = require('../../../../../extension/lib/shopify/product-repository/CommandFactory')
const ShopifyProduct = require('../../../../../extension/lib/shopify/Product')
const shopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const integrationCredentials = require('../../../../../.integration-credentials')
const assert = require('assert')

describe('ShopifyProductRepository', function () {
  let subjectUnderTest
  const adminClient = shopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)

  beforeEach(() => {
    subjectUnderTest = new ShopifyProductRepository(new ShopifyProductRepositoryCommandFactory(adminClient))
  })

  describe('simple products', function () {
    // it('should return Seattle Mariners when asked to list by product id', async function () {
    //   const products = await subjectUnderTest.listByIds([535256334399], 0, 1, true)
    //   assert.deepEqual(products, [
    //     new ShopifyProduct(
    //       535256334399,
    //       '[Integration Test] Seattle Mariners MLB Low Profile C-DUB 59FIFTY Cap',
    //       'integration-test-seattle-mariners-mlb-low-profile-c-dub-59fifty-cap',
    //       34.99,
    //       40.10,
    //       'https://cdn.shopify.com/s/files/1/0005/5731/8207/products/hwl_fcaf939b-ebc9-4905-9bef-13e600e25da5.jpg?v=1520412814')
    //   ])
    // })
  })
})
