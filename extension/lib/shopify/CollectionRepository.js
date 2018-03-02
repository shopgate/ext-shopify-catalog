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
   * @param {string} id
   * @returns {Promise<ShopifyCollection>}
   */
  async get (id) {
    const getCollection = this._shopifyCollectionCommandFactory.createGet().execute(id)
    const getChildrenCount = this._shopifyCollectionCommandFactory.createGetChildrenCount().execute(id)
    const getProductCount = this._shopifyCollectionCommandFactory.createGetProductCount().execute(id)

    const [collection, childrenCount, productCount] = await Promise.all([getCollection, getChildrenCount, getProductCount])

    return new ShopifyCollection(collection.id, collection.title, childrenCount, productCount, collection.image)
  }

  /**
   * @returns {Promise<ShopifyCollection[]>}
   */
  async list () {

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
