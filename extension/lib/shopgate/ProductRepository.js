const ShopifyProductRepository = require('../shopify/ProductRepository')
const shopifyStorefrontClient = require('../shopify/StorefrontClient')
const shopifyAdminClient = require('../shopify/AdminClient')
const ShopgateAuthorisation = require('./Authorisation')

class ShopgateProductRepository {
  /**
   * @param {ShopifyProductRepository} shopifyProductRepository
   */
  constructor (shopifyProductRepository) {
    this._shopifyProductRepository = shopifyProductRepository
  }

  /**
   * @param {string[]} productIds
   * @param {number} offset
   * @param {number} limit
   * @param {string} sort
   * @param {boolean} showInactive
   * @returns {Promise<GetProductsResponse>}
   */
  async getByProductIds (productIds, offset, limit, sort, showInactive) {
    return {products: this._shopifyProductRepository.getByProductIds(productIds, offset, limit, showInactive), totalProductCount: 0}
  }

  /**
   * @param {string} combinedCategoryId
   * @param {number} offset
   * @param {number} limit
   * @param {string} sort
   * @param {boolean} showInactive
   * @returns {Promise<GetProductsResponse>}
   */
  async getByCategoryId (combinedCategoryId, offset, limit, sort, showInactive) {
    const [ categoryId ] = combinedCategoryId.split('/')
    return {products: this._shopifyProductRepository.getByCategoryId(categoryId, offset, limit, showInactive), totalProductCount: 0}
  }

  /**
   * @param {PipelineContext} context
   * @returns {Promise<ShopgateProductRepository>}
   */
  static async create (context) {
    const shopgateAuthorisation = ShopgateAuthorisation.create(context)

    const shopifyProductRepository = ShopifyProductRepository.create(
      shopifyStorefrontClient.createClient(await shopgateAuthorisation.acquireShopifyStorefrontToken(), context.config.shopifyShopAlias),
      shopifyAdminClient(context.config.shopifyAccessToken, context.config.shopifyShopAlias)
    )

    return new ShopgateProductRepository(shopifyProductRepository)
  }
}

module.exports = ShopgateProductRepository
