const ShopifyProduct = require('./Product')
const ShopifyProductRepositoryCommandFactory = require('./product-repository/CommandFactory')

class ShopifyProductRepository {
  /**
   * @param {ShopifyProductRepositoryCommandFactory} commandFactory
   */
  constructor (commandFactory) {
    this._commandFactory = commandFactory
  }

  /**
   * @param {string[]} ids
   * @param {number} offset
   * @param {number } limit
   * @param {boolean} showInactive
   * @returns {Promise<ShopifyProduct[]>}
   */
  async listByIds (ids, offset, limit, showInactive) {
    const products = await this._commandFactory.createListByIds().execute(ids, offset, limit, showInactive)
    return products.map((product) => {
      return new ShopifyProduct(product.id, product.title, product.handle, product.price, product.compareAtPrice, product.image)
    })
  }

  /**
   * @param {string} collectionId
   * @param {number} offset
   * @param {number } limit
   * @param {boolean} showInactive
   * @returns {Promise<ShopifyProduct[]>}
   */
  async listByCollectionId (collectionId, offset, limit, showInactive) {
    const products = await this._commandFactory.createListByCollection().execute(collectionId, offset, limit, showInactive)
    return products.map((product) => {
      return new ShopifyProduct(product.id, product.title, product.handle, product.price, product.compareAtPrice, product.image)
    })
  }

  /**
   * @param {ShopifyAdminClient} adminClient
   * @returns {ShopifyProductRepository}
   */
  static create (adminClient) {
    return new ShopifyProductRepository(new ShopifyProductRepositoryCommandFactory(adminClient))
  }
}

module.exports = ShopifyProductRepository
