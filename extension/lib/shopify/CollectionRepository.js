const ShopifyCollection = require('./Collection')
const ShopifyCollectionRepositoryCommandFactory = require('./collection-repository/CommandFactory')

class ShopifyCollectionRepository {
  /**
   * @param {ShopifyCollectionRepositoryCommandFactory} shopifyCollectionCommandFactory
   */
  constructor (shopifyCollectionCommandFactory) {
    this._shopifyCollectionCommandFactory = shopifyCollectionCommandFactory
  }

  /**
   * @param {number} collectionId
   * @param {string} handle
   * @returns {Promise<ShopifyCollection>}
   */
  async get (collectionId, handle) {
    const getCollection = this._shopifyCollectionCommandFactory.createGet().execute(handle)
    const getProductCount = this._shopifyCollectionCommandFactory.createGetProductCount().execute(collectionId)

    const [collection, productCount] = await Promise.all([getCollection, getProductCount])

    return new ShopifyCollection(collection.id, collection.handle, collection.title, 0, productCount, collection.image, [])
  }

  /**
   * @returns {Promise<ShopifyCollection[]>}
   */
  async list () {
    const rawCollections = await this._shopifyCollectionCommandFactory.createList().execute()

    const productCountPromises = rawCollections.map(collection => {
      return this._shopifyCollectionCommandFactory.createGetProductCount().execute(collection.id)
    })

    const collectionCategoryCounts = await Promise.all(productCountPromises)

    return rawCollections.map((rawCollection, index) => {
      return new ShopifyCollection(rawCollection.id, rawCollection.handle, rawCollection.title, 0, collectionCategoryCounts[index], rawCollection.image)
    })
  }

  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {ShopifyAdminClient} adminClient
   * @returns {ShopifyCollectionRepository}
   */
  static create (storefrontClient, adminClient) {
    return new ShopifyCollectionRepository(new ShopifyCollectionRepositoryCommandFactory(storefrontClient, adminClient))
  }
}

module.exports = ShopifyCollectionRepository
