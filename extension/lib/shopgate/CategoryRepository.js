const ShopifyCollectionRepository = require('../shopify/CollectionRepository')
const shopifyStorefrontClient = require('../shopify/StorefrontClient')
const shopifyAdminClient = require('../shopify/AdminClient')
const ShopgateAuthorisation = require('./Authorisation')

class ShopgateCategoryRepository {
  /**
   * @param {ShopifyCollectionRepository} shopifyCollectionRepository
   */
  constructor (shopifyCollectionRepository) {
    this._shopifyCollectionRepository = shopifyCollectionRepository
  }

  /**
   * @param {string} combinedId
   * @returns {Promise<GetCategoryResponse>}
   */
  async getCategory (combinedId) {
    const [ id, handle ] = combinedId.split('/')
    const shopifyCollection = await this._shopifyCollectionRepository.get(parseInt(id), handle)

    return {
      id: shopifyCollection.id + '/' + shopifyCollection.handle,
      name: shopifyCollection.title,
      productCount: shopifyCollection.productCount,
      imageUrl: shopifyCollection.image,
      childrenCount: shopifyCollection.childrenCount,
      parent: null,
      children: []
    }
  }

  /**
   * @return {Promise<GetRootCategoriesResponse>}
   */
  async getRootCategories () {
    const shopifyCollections = await this._shopifyCollectionRepository.list()
    const rootCategories = shopifyCollections.map(shopifyCollection => {
      return {
        id: shopifyCollection.id + '/' + shopifyCollection.handle,
        name: shopifyCollection.title,
        productCount: shopifyCollection.productCount,
        imageUrl: shopifyCollection.image,
        childrenCount: shopifyCollection.childrenCount,
        children: []
      }
    })
    return {categories: rootCategories}
  }

  /**
   * @param {PipelineContext} context
   * @returns {Promise<ShopgateCategoryRepository>}
   */
  static async create (context) {
    const shopgateAuthorisation = ShopgateAuthorisation.create(context)

    const shopifyCollectionRepository = ShopifyCollectionRepository.create(
      shopifyStorefrontClient.createClient(await shopgateAuthorisation.acquireShopifyStorefrontToken(), context.config.shopifyShopAlias),
      shopifyAdminClient(context.config.shopifyAccessToken, context.config.shopifyShopAlias)
    )

    return new ShopgateCategoryRepository(shopifyCollectionRepository)
  }
}

module.exports = ShopgateCategoryRepository
