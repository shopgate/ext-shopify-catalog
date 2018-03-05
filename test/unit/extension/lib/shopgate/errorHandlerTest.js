const errorHandler = require('../../../../../extension/lib/shopgate/errorHandler')
const ShopifyStorefrontClientAccessForbiddenError = require('../../../../../extension/lib/shopify/storefront-client/AccessForbiddenError')
const ShopgateAuthorisationrepository = require('../../../../../extension/lib/shopgate/AuthorisationRepository')
const sinon = require('sinon')

describe('errorHandler', () => {
  const context = {log: {error: () => {}}}
  const shopgateAuthorisationRepository = new ShopgateAuthorisationrepository({}, {})
  let authorisationRepositoryMock
  let authorisationRepositoryCreateStub
  let loggerMock
  beforeEach(() => {
    loggerMock = sinon.mock(context.log)
    authorisationRepositoryMock = sinon.mock(shopgateAuthorisationRepository)
    authorisationRepositoryCreateStub = sinon.stub(ShopgateAuthorisationrepository, 'create').callsFake(() => {
      return shopgateAuthorisationRepository
    })
  })

  afterEach(() => {
    authorisationRepositoryCreateStub.restore()
    authorisationRepositoryMock.verify()
    authorisationRepositoryMock.restore()
    loggerMock.verify()
    loggerMock.restore()
  })

  it('should log the error', function () {
    loggerMock.expects('error').once()
    errorHandler(new Error('test fake'), /** @type {PipelineContext} */context)
  })

  it('should invalidate persisted authorisation token', function () {
    loggerMock.expects('error').twice()
    authorisationRepositoryMock.expects('releaseShopifyStorefrontToken').once().returns(Promise.reject(new Error('fake')))
    errorHandler(new ShopifyStorefrontClientAccessForbiddenError('fake url', 'fake token'), /** @type {PipelineContext} */context)
  })
})
