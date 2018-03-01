const shopifyCollectionRepositoryCommandGetGraphQL = require('./command/GetGraphQL')
const shopifyCollectionRepositoryCommandListGraphQL = require('./command/ListGraphQl')
const shopifyCollectionRepositoryCommandChildrenGetCount = require('./command/GetProductCountAdmin')

class ShopifyCollectionCommandFactory {
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
    return shopifyCollectionRepositoryCommandGetGraphQL(this._storefrontClient)
  }

  /**
   * @return {ShopifyCollectionRepositoryCommandListGraphQL}
   */
  createList () {
    return shopifyCollectionRepositoryCommandListGraphQL(this._storefrontClient)
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandChildrenGetCount}
   */
  createGetProductCount () {
    return shopifyCollectionRepositoryCommandChildrenGetCount(this._adminClient)
  }
}

module.exports = ShopifyCollectionCommandFactory
