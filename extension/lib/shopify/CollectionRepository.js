const ShopifyCollection = require('./Collection')
const ShopifyCollectionRepositoryCommandFactory = require('./collection-repository/CommandFactory')

class ShopifyCollectionRepository {
  /**
   * @param {ShopifyCollectionCommandFactory} shopifyCollectionCommandFactory
   */
  constructor (shopifyCollectionCommandFactory) {
    this._shopifyCollectionCommandFactory = shopifyCollectionCommandFactory
  }

  /**
   * @param {string} collectionId
   * @param {string} handle
   * @returns {Promise<ShopifyCollection>}
   */
  async get (collectionId, handle) {
    const getCollection = this._shopifyCollectionCommandFactory.createGet().execute(handle)
    const getProductCount = this._shopifyCollectionCommandFactory.createGetProductCount().execute(handle)

    const [collection, productCount] = await Promise.all([getCollection, getProductCount])

    return new ShopifyCollection(collection.id, collection.title, 0, productCount, collection.image, [])
  }

  /**
   * @returns {Promise<ShopifyCollection[]>}
   */
  async list () {

  }

  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {ShopifyAdminClient} adminClient
   * @returns {ShopifyCollectionCommandFactory}
   */
  static create (storefrontClient, adminClient) {
    return new ShopifyCollectionRepositoryCommandFactory(storefrontClient, adminClient)
  }
}

module.exports = ShopifyCollectionRepository
