const assert = require('assert')
const StoreFrontApiFactory = require('../../../../../../../extension/lib/shopify/StorefrontClientFactory')
const ListGraphQl = require('../../../../../../../extension/lib/shopify/collection-repository/command/ListGraphQl')
const integrationCredentials = require('../../../../../../../.integration-credentials')
const sinon = require('sinon')

describe('ListGraphQl Command', () => {
  it('should return shopify categories', async () => {
    const testHandle = 'integration-test-do-no-touch'
    const storeFrontApiFactory = new StoreFrontApiFactory(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)

    const shopifyStorefrontClient = storeFrontApiFactory.create()

    const listCommand = new ListGraphQl(shopifyStorefrontClient)

    const categories = await listCommand.execute()
    const testCategory = categories.find(category => {
      return category.handle === testHandle
    })

    assert.equal('Integration-Test *Do no touch*', testCategory.title)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', testCategory.image)
  })

  it('should make a paginated request', async () => {
    const storeFrontApiFactory = new StoreFrontApiFactory(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)
    const shopifyStorefrontClient = storeFrontApiFactory.create()
    const listCommandControl = new ListGraphQl(shopifyStorefrontClient)
    const listCommand = new ListGraphQl(shopifyStorefrontClient)
    listCommand.numberPerPage = 1
    const makePaginatedRequestExperimentalSpy = sinon.spy(listCommand, '_makePaginatedRequests')
    const makePaginatedRequestControlSpy = sinon.spy(listCommandControl, '_makePaginatedRequests')
    const listCommandControlGroup = listCommandControl.execute()
    const listCommandExperimentalGroup = listCommand.execute()
    const [controlGroup, experimentalGroup] = await Promise.all([listCommandControlGroup, listCommandExperimentalGroup])

    assert.equal(makePaginatedRequestExperimentalSpy.callCount, controlGroup.length)
    assert.equal(makePaginatedRequestControlSpy.callCount, 1)
    assert.equal(experimentalGroup.length, controlGroup.length)
  })
})
