const ShopifyCollectionRepository = require('../shopify/CollectionRepository')
const ShopifyStorefrontClientFactory = require('../shopify/StorefrontClientFactory')
const ShopifyAdminClientFactory = require('../shopify/AdminClientFactory')

class ShopgateCategoryExtensionPipeline {
  async getCategory (id) {

  }

  async getRootCategories () {

  }

  /**
   * @param {PipelineContext} context
   * @returns {ShopgateCategoryExtensionPipeline}
   */
  static create (context) {
    const shopifyStorefrontFactory = new ShopifyStorefrontClientFactory()
    const shopifyAdminFactory = new ShopifyAdminClientFactory()

    // todo inject the dependencies - storefront and admin client
    const shopifyCollectionRepository = ShopifyCollectionRepository.create(
      shopifyStorefrontFactory.create(),
      shopifyAdminFactory.create()
    )

    return new ShopgateCategoryExtensionPipeline(shopifyCollectionRepository)
  }
}

module.exports = ShopgateCategoryExtensionPipeline
