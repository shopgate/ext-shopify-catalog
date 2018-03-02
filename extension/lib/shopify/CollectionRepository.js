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
   * @returns {ShopifyCollectionCommandFactory}
   */
  static create (storefrontClient, adminClient) {
    return new ShopifyCollectionRepository(new ShopifyCollectionRepositoryCommandFactory(storefrontClient, adminClient))
  }
}

module.exports = ShopifyCollectionRepository
