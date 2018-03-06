const assert = require('assert')
const storeFrontApiClient = require('../../../../../../../extension/lib/shopify/StorefrontClient')
const ListGraphQl = require('../../../../../../../extension/lib/shopify/collection-repository/command/ListGraphQl')
const integrationCredentials = require('../../../../../../../.integration-credentials')
const sinon = require('sinon')

describe('ListGraphQl Command', () => {
  it('should return shopify categories', async () => {
    const testHandle = 'integration-test-do-no-touch'
    const shopifyStorefrontClient = storeFrontApiClient.createClient(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)

    const listCommand = new ListGraphQl(shopifyStorefrontClient)

    const categories = await listCommand.execute()
    const testCategory = categories.find(category => {
      return category.handle === testHandle
    })

    assert.equal('Integration-Test *Do no touch*', testCategory.title)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', testCategory.image)
  })

  it('should make a paginated request', async () => {
    const shopifyStorefrontClient = storeFrontApiClient.createClient(integrationCredentials.storefrontAccessToken, integrationCredentials.shopName)
    const listCommandControl = new ListGraphQl(shopifyStorefrontClient)
    const listCommand = new ListGraphQl(shopifyStorefrontClient, 1)
    const makePaginatedRequestExperimentalSpy = sinon.spy(listCommand, '_fetchCollections')
    const makePaginatedRequestControlSpy = sinon.spy(listCommandControl, '_fetchCollections')
    const listCommandControlGroup = listCommandControl.execute()
    const listCommandExperimentalGroup = listCommand.execute()
    const [controlGroup, experimentalGroup] = await Promise.all([listCommandControlGroup, listCommandExperimentalGroup])

    assert.equal(makePaginatedRequestExperimentalSpy.callCount, controlGroup.length)
    assert.equal(makePaginatedRequestControlSpy.callCount, 1)
    assert.equal(experimentalGroup.length, controlGroup.length)
  }).timeout(4000)
})
