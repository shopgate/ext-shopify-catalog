const ShopgateProductRepository = require('../../../../../extension/lib/shopgate/ProductRepository')
const ShopifyProductRepository = require('../../../../../extension/lib/shopify/ProductRepository')
const integrationCredentials = require('../../../../../.integration-credentials')
const ShopgateProductSort = require('../../../../../extension/lib/shopgate/product/Sort')
const ShopifyStorefrontClient = require('../../../../../extension/lib/shopify/StorefrontClient')
const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const assert = require('assert')
const sinon = require('sinon')

const shopifyStorefrontClient = ShopifyStorefrontClient.createClient(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)
const shopifyAdminClient = ShopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)

describe('ProductRepository', () => {
  /** @type {ShopgateProductRepository} */
  let subjectUnderTest

  it('should return product data for a specific category', async () => {
    const shopifyProductRepository = sinon.mock({ShopifyProductRepository.create(
      shopifyStorefrontClient.createClient(
        integrationCredentials.storefrontAccessToken,
        integrationCredentials.shopName
      ),
      shopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)
    ))

    subjectUnderTest = new ShopgateProductRepository(shopifyProductRepository)

    const shopgateProducts = await subjectUnderTest.getByCategoryId(
      'integration-test-do-no-touch/30963826751',
      0,
      2,
      ShopgateProductSort.RANDOM,
      false
    )

    shopifyProductRepository.expects('getByCategoryId').withArgs(30963826751, 0, 2, false)
    assert.equal(2, shopgateProducts.length)
  })
})
