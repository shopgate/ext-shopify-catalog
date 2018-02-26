const ShopifyClient = require('shopify-api-node')
const STOREFRONT_ACCESS_TOKEN_TITLE = 'shopgate-app-access-token'

class ShopifyAdminClient extends ShopifyClient {
  /**
   * @param {string} id
   * @return {Promise.<void>}
   */
  async getProductCountByCollectionId (id) {
    return this.product.count({collection_id: id})
  }

  /**
   * @return {Promise.<*>}
   */
  async createStorefrontAccessToken () {
    return this.storefrontAccessToken.create({title: STOREFRONT_ACCESS_TOKEN_TITLE})
  }

  async getStorefrontAccessTokens () {
    return this.storefrontAccessToken.list()
  }
}
module.exports = ShopifyAdminClient
