const shopifyAdminClient = require('../../../../../extension/lib/shopify/AdminClient')
const ShopifyCollectionRepository = require('../../../../../extension/lib/shopify/CollectionRepository')
const storeFrontApiClient = require('../../../../../extension/lib/shopify/StorefrontClient')
const integrationCredentials = require('../../../../../.integration-credentials')
const assert = require('assert')

describe('CollectionRepository', () => {
  /** @type {ShopifyCollectionRepository} */
  let subjectUnderTest

  beforeEach(() => {
    subjectUnderTest = ShopifyCollectionRepository.create(
      storeFrontApiClient.createClient(
        integrationCredentials.storefrontAccessToken,
        integrationCredentials.shopName
      ),
      shopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)
    )
  })

  it('should return the collection data', async () => {
    const collectionResponse = await subjectUnderTest.get(30963826751, 'integration-test-do-no-touch')

    assert.equal(30963826751, collectionResponse.id)
    assert.equal('integration-test-do-no-touch', collectionResponse.handle)
    assert.equal('Integration-Test *Do no touch*', collectionResponse.title)
    assert.equal(0, collectionResponse.childrenCount)
    assert.deepEqual([], collectionResponse.children)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', collectionResponse.image)
  })

  it('should return collection list without empty collections', async () => {
    const collections = await subjectUnderTest.list()

    assert.equal(0, collections.filter(collection => collection.productCount === 0))
    assert.equal(true, collections.length > 0)
  })
})
