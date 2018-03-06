const ShopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const ShopifyCollectionRepository = require('../../../../../extension/lib/shopify/CollectionRepository')
const StoreFrontApiFactory = require('../../../../../extension/lib/shopify/StorefrontClientFactory')
const integrationCredentials = require('../../../../../.integration-credentials')
const assert = require('assert')

describe('CollectionRepositoryClient', () => {
  /** @type {ShopifyCollectionRepository} */
  let subjectUnderTest

  beforeEach(() => {
    const StorefrontApiClientFactory = new StoreFrontApiFactory(
      integrationCredentials.storefrontAccessToken,
      integrationCredentials.shopName
    )

    subjectUnderTest = ShopifyCollectionRepository.create(
      StorefrontApiClientFactory.create(),
      new ShopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)
    )
  })

  it('should return the category data', async () => {
    const collectionResponse = await subjectUnderTest.get(30963826751, 'integration-test-do-no-touch')

    assert.equal(30963826751, collectionResponse.id)
    assert.equal('integration-test-do-no-touch', collectionResponse.handle)
    assert.equal('Integration-Test *Do no touch*', collectionResponse.title)
    assert.equal(0, collectionResponse.childrenCount)
    assert.deepEqual([], collectionResponse.children)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', collectionResponse.image)
  })
})
