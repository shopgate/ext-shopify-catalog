const ShopgateCategoryExtensionPipeline = require('../../../../../extension/lib/shopgate/CategoryRepository')
const assert = require('assert')
const sinon = require('sinon')

describe('CategoryExtensionPipeline', () => {
  it('should convert a collection properly', async () => {
    /** @type ShopifyCollectionRepository */
    const get = {get: function () {}}
    const mock = sinon.mock(get)

    mock.expects('get').once().returns({
      'id': '30963826751',
      'handle': 'integration-test-do-no-touch',
      'title': 'Integration-Test *Do no touch*',
      'image': 'https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424',
      'childrenCount': 0
    })

    const shopgateCategoryExtensionPipeline = new ShopgateCategoryExtensionPipeline(get)
    const shopgateCategoryResponse = await shopgateCategoryExtensionPipeline.getCategory('30963826751/integration-test-do-no-touch')

    assert.equal('30963826751/integration-test-do-no-touch', shopgateCategoryResponse.id)
    assert.equal('Integration-Test *Do no touch*', shopgateCategoryResponse.name)
    assert.equal('https://cdn.shopify.com/s/files/1/0005/5731/8207/collections/Download.png?v=1519823424', shopgateCategoryResponse.imageUrl)
    assert.deepEqual([], shopgateCategoryResponse.children)
    assert.equal(0, shopgateCategoryResponse.childrenCount)
  })
})
