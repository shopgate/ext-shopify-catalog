const shopifyCollectionRepositoryCommandGetGraphQL = require('./command/GetGraphQl')
const ShopifyCollectionRepositoryCommandGetCountAdminApi = require('./command/product/GetCountAdminApi')

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
   * @returns {ShopifyCollectionRepositoryCommandProductGetCountAdminApi}
   */
  createGetProductCount () {
    return new ShopifyCollectionRepositoryCommandGetCountAdminApi(this._adminClient)
  }
}

module.exports = ShopifyCollectionRepositoryCommandFactory
