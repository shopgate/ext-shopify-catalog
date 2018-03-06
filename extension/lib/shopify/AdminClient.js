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

  /**
   * @return {Promise<string>}
   */
  async getFirstApplicableStorefrontAccessToken () {
    const accessTokens = await this.getStorefrontAccessTokens()
    const applicableAccessToken = accessTokens.find(token => {
      if (token.title === STOREFRONT_ACCESS_TOKEN_TITLE) {
        return token
      }
    })

    if (applicableAccessToken) {
      return applicableAccessToken.access_token
    }

    const createdAccessToken = await this.createStorefrontAccessToken()

    return createdAccessToken.access_token
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
