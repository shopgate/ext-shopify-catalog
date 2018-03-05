const ShopgateAuthorisationRepository = require('../../../../../extension/lib/shopgate/AuthorisationRepository')
const ShopgateExtensionStorage = require('../../../../../extension/lib/shopgate/ExtensionStorage')
const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')

const sinon = require('sinon')
const assert = require('assert')

describe('ShopgateAuthorisationRepository', function () {
  let shopgateExtensionStorageStub
  let shopifyAdminClientStub
  let subjectUnderTest
  beforeEach(() => {
    shopgateExtensionStorageStub = sinon.createStubInstance(ShopgateExtensionStorage)
    shopifyAdminClientStub = sinon.stub.createStubInstance(ShopifyAdminClient)
    subjectUnderTest = new ShopgateAuthorisationRepository(shopgateExtensionStorageStub, shopifyAdminClientStub)
  })

  it('should ask extension storage in order to get presaved shopify storefront authorisation token', async function () {
    shopgateExtensionStorageStub.get.returns('fake auth token')

    assert.equal(await subjectUnderTest.acquireShopifyStorefrontToken(), 'fake auth token')
  })

  it('should ask admin api client client for shopify storefront authorisation token', async function () {
    shopgateExtensionStorageStub.get.returns(null)
    shopifyAdminClientStub.createStorefrontAccessToken.returns('fake auth token')

    assert.equal(await subjectUnderTest.acquireShopifyStorefrontToken(), 'fake auth token')
  })

  it('should ask remove storefront token from storage', async function () {
    await subjectUnderTest.releaseShopifyStorefrontToken()
    assert(shopgateExtensionStorageStub.delete.calledOnce)
  })
})
