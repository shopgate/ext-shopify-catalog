const ShopgateAuthorisation = require('../../../../../extension/lib/shopgate/Authorisation')
const ShopgateExtensionStorage = require('../../../../../extension/lib/shopgate/ExtensionStorage')
const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')

const sinon = require('sinon')
const assert = require('assert')

describe('ShopgateAuthorisation', function () {
  let shopgateExtensionStorageStub
  let shopifyAdminClientStub
  const shopifyAdminClient = ShopifyAdminClient('fake', 'fake')
  let subjectUnderTest
  beforeEach(() => {
    shopgateExtensionStorageStub = sinon.createStubInstance(ShopgateExtensionStorage)
    shopifyAdminClientStub = sinon.stub(shopifyAdminClient, 'createStorefrontAccessToken')
    subjectUnderTest = new ShopgateAuthorisation(shopgateExtensionStorageStub, shopifyAdminClient)
  })
  afterEach(() => {
    shopifyAdminClientStub.restore()
  })

  it('should ask extension storage in order to get presaved shopify storefront authorisation token', async function () {
    shopgateExtensionStorageStub.get.returns('fake auth token')

    assert.equal(await subjectUnderTest.acquireShopifyStorefrontToken(), 'fake auth token')
  })

  it('should ask admin api client client for shopify storefront authorisation token', async function () {
    shopgateExtensionStorageStub.get.returns(null)
    shopifyAdminClientStub.returns({access_token: 'fake auth token'})

    assert.equal(await subjectUnderTest.acquireShopifyStorefrontToken(), 'fake auth token')
  })

  it('should ask remove storefront token from storage', async function () {
    await subjectUnderTest.releaseShopifyStorefrontToken()
    assert(shopgateExtensionStorageStub.delete.calledOnce)
  })
})
