const errorHandler = require('../../../../../extension/lib/shopgate/errorHandler')
const ShopifyStorefrontClientAccessForbiddenError = require('../../../../../extension/lib/shopify/storefront-client/AccessForbiddenError')
const ShopgateAuthorisation = require('../../../../../extension/lib/shopgate/Authorisation')
const sinon = require('sinon')

describe('errorHandler', () => {
  const context = {log: {error: () => {}}}
  const shopgateAuthorisation = new ShopgateAuthorisation({}, {})
  let authorisationMock
  let authorisationCreateStub
  let loggerMock

  beforeEach(() => {
    loggerMock = sinon.mock(context.log)
    authorisationMock = sinon.mock(shopgateAuthorisation)
    authorisationCreateStub = sinon.stub(ShopgateAuthorisation, 'create').callsFake(() => {
      return shopgateAuthorisation
    })
  })

  afterEach(() => {
    authorisationCreateStub.restore()
    authorisationMock.verify()
    authorisationMock.restore()
    loggerMock.verify()
    loggerMock.restore()
  })

  it('should log the error', function () {
    loggerMock.expects('error').once()
    errorHandler(new Error('test fake'), /** @type {PipelineContext} */context)
  })

  it('should invalidate persisted authorisation token', function () {
    loggerMock.expects('error').twice()
    authorisationMock.expects('releaseShopifyStorefrontToken').once().returns(Promise.reject(new Error('fake')))
    errorHandler(new ShopifyStorefrontClientAccessForbiddenError('fake url', 'fake token'), /** @type {PipelineContext} */context)
  })
})
