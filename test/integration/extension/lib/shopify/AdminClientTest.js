const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const integrationCredentials = require('../../../../../.integration-credentials')
const assert = require('assert')

describe('ShopifyAdminClient', () => {
  /** @type {ShopifyAdminClient} */
  let subjectUnderTest

  beforeEach(() => {
    subjectUnderTest = new ShopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)
  })

  it('should list storefront tokens', async () => {
    const result = await subjectUnderTest.storefrontAccessToken.list()
    assert.ok(result.length)

    const webcheckoutToken = result.filter((token) => {
      return token.id === 7119077439
    })

    assert.equal(webcheckoutToken.length, 1)
  })
})
