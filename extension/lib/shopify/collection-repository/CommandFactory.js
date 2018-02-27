const shopifyCollectionRepositoryCommandGetGraphQL = require('./command/GetGraphQL')

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
   * @returns {ShopifyCollectionRepositoryCommandChildrenGetCount}
   */
  createGetChildrenCount () {

  }

  /**
   * @returns {ShopifyCollectionRepositoryCommandChildrenGetCount}
   */
  createGetProductCount () {

  }
}

module.exports = ShopifyCollectionCommandFactory
