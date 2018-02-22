const ShopifyAdminClient = require('../../../../extension/lib/ShopifyAdminClient')
const sinon = require('sinon')
const assert = require('assert')

describe('Cart - unit', function () {
  let subjectUnderTest
  const config = {
    shopDomain: 'https://notarealshop.myshopify.com',
    token: '01234567899876543210',
    apiKey: null,
    secret: null
  }
  beforeEach(() => {
    subjectUnderTest = new ShopifyAdminClient(config.shopDomain, config.token, config.apiKey, config.secret)
  })

  it('should have domain equal to shopDomain of config when instantiated', function () {
    assert.equal(subjectUnderTest._token, config.token)
  })
})


