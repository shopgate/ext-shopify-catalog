const ShopifyCollectionRepository = require('../shopify/CollectionRepository')
const ShopifyStorefrontClientFactory = require('../shopify/StorefrontClientFactory')
const ShopifyAdminClientFactory = require('../shopify/AdminClientFactory')

class ShopgateCategoryExtensionPipeline {
  /**
   * @param {ShopifyCollectionRepository} shopifyCollectionRepository
   */
  constructor (shopifyCollectionRepository) {
    this._shopifyCollectionRepository = shopifyCollectionRepository
  }

  /**
   * @param {string} id
   * @returns {Promise<GetCategoryResponse>}
   */
  async getCategory (id) {
    const shopifyCollection = await this._shopifyCollectionRepository.get(id)

    return {
      id: shopifyCollection.handle,
      name: shopifyCollection.title,
      productCount: shopifyCollection.productCount,
      imageUrl: shopifyCollection.image,
      childrenCount: shopifyCollection.childrenCount,
      parent: null,
      children: []
    }
  }

  async getRootCategories () {
    return (await this._shopifyCollectionRepository.list()).map((shopifyCollection) => {
      // TODO map to the getRootCategories response specification
    })
  }

  /**
   * @param {PipelineContext} context
   * @returns {ShopgateCategoryExtensionPipeline}
   */
  static create (context) {
    const shopifyAdminFactory = new ShopifyAdminClientFactory(context.config.shopifyAccessToken, context.config.shopifyShopAlias)
    const shopifyStorefrontFactory = new ShopifyStorefrontClientFactory()

    // todo inject the dependencies - storefront and admin client
    const shopifyCollectionRepository = ShopifyCollectionRepository.create(
      shopifyStorefrontFactory.create(),
      shopifyAdminFactory.create()
    )

    return new ShopgateCategoryExtensionPipeline(shopifyCollectionRepository)
  }
}

module.exports = ShopgateCategoryExtensionPipeline
