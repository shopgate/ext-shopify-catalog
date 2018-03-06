const ShopifyProductRepository = require('../shopify/ProductRepository')
const ShopifyStorefrontClientFactory = require('../shopify/StorefrontClientFactory')
const ShopifyAdminClientFactory = require('../shopify/AdminClientFactory')

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
    return {products: [], totalProductCount: 0}
  }

  /**
   * @param {number} categoryId
   * @param {number} offset
   * @param {number} limit
   * @param {string} sort
   * @param {boolean} showInactive
   * @returns {Promise<GetProductsResponse>}
   */
  async getByCategoryId (categoryId, offset, limit, sort, showInactive) {
    return {products: [], totalProductCount: 0}
  }

  /**
   * @param {PipelineContext} context
   * @returns {ShopgateProductRepository}
   */
  static create (context) {
    const shopifyAdminFactory = new ShopifyAdminClientFactory(context.config.shopifyAccessToken, context.config.shopifyShopAlias)
    const shopifyStorefrontFactory = new ShopifyStorefrontClientFactory('todo', context.config.shopifyShopAlias)

    // todo inject the dependencies - storefront and admin client
    const shopifyProductRepository = ShopifyProductRepository.create(
      shopifyStorefrontFactory.create(),
      shopifyAdminFactory.create()
    )

    return new ShopgateProductRepository(shopifyProductRepository)
  }
}

module.exports = ShopgateProductRepository
