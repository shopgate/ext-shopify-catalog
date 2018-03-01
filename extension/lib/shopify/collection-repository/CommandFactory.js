const shopifyCollectionRepositoryCommandGetGraphQL = require('./command/GetGraphQl')

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
    return shopifyCollectionRepositoryCommandGetGraphQL(this._storefrontClient)
  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandChildrenGetCount}
   */
  createGetProductCount () {

  }
}

module.exports = ShopifyCollectionRepositoryCommandFactory
