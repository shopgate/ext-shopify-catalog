const ShopifyClient = require('shopify-api-node')
const STOREFRONT_ACCESS_TOKEN_TITLE = 'shopgate-app-access-token'

class ShopifyAdminClient extends ShopifyClient {
  /**
   * @param {string} adminAccessToken
   * @param {string} shopName
   */
  constructor (adminAccessToken, shopName) {
    super({shopName: shopName, accessToken: adminAccessToken})
  }

  /**
   * @return {Promise<ShopifyAccessTokenObject>}
   */
  async createStorefrontAccessToken () {
    return this.storefrontAccessToken.create({title: STOREFRONT_ACCESS_TOKEN_TITLE})
  }
}

/**
 * @param {string} adminAccessToken
 * @param {string} shopName
 * @returns {ShopifyAdminClient}
 */
module.exports = function (adminAccessToken, shopName) {
  return new ShopifyAdminClient(adminAccessToken, shopName)
}
