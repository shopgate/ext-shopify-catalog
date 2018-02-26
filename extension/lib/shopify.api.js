const ShopifyClient = require('shopify-api-node')
const STOREFRONT_ACCESS_TOKEN_TITLE = 'shopgate-app-access-token'

/**
 * Class for interacting with the Shopify-APIs
 */
class ShopifyWrapper {
  /**
   * @typedef {object} ShopifyConfig
   * @property {string} shopifyShopAlias
   * @property {string} shopifyAccessToken
   * @param {ShopifyConfig} ShopifyConfig
   */
  constructor (shop, accessToken) {
    this._shopifyAdminClient = new ShopifyClient({shopName: shop, accessToken: accessToken})
  }

  /**
   * @param {string} id
   * @return {Promise.<void>}
   */
  async getProductCountByCollectionId (id) {
    return this._shopifyAdminClient.product.count({collection_id: id})
  }

  /**
   * @return {Promise.<*>}
   */
  async getStorefrontAccessTokenNew () {
    const token = await this._shopifyAdminClient.storefrontAccessToken.create({title: STOREFRONT_ACCESS_TOKEN_TITLE})
    return token
  }
}

module.exports = ShopifyWrapper
