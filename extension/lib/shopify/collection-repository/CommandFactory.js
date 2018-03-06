const shopifyCollectionRepositoryCommandListGraphQl = require('./command/ListGraphQl')
const shopifyCollectionRepositoryCommandGetGraphQl = require('./command/GetGraphQl')
const shopifyCollectionRepositoryCommandProductGetCountAdminApi = require('./command/product/GetCountAdminApi')
const ShopifyCollectionRepositoryCommandCategoryIdentifierConverter = require('./command/category/IdentifierConverter')

class ShopifyCollectionRepositoryCommandFactory {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {ShopifyAdminClient} adminClient
   */
  constructor (storefrontClient, adminClient) {
    this._storefrontClient = storefrontClient
    this._adminClient = adminClient
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandGet}
   */
  createGet () {
    return shopifyCollectionRepositoryCommandGetGraphQl(
      this._storefrontClient,
      new ShopifyCollectionRepositoryCommandCategoryIdentifierConverter()
    )
  }

  /**
   * @return {ShopifyCollectionRepositoryCommandListGraphQl}
   */
  createList () {
    return shopifyCollectionRepositoryCommandListGraphQl(
      this._storefrontClient,
      new ShopifyCollectionRepositoryCommandCategoryIdentifierConverter()
    )
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandProductGetCountAdminApi}
   */
  createGetProductCount () {
    return shopifyCollectionRepositoryCommandProductGetCountAdminApi(this._adminClient)
  }
}

module.exports = ShopifyCollectionRepositoryCommandFactory
