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
   * @param {number} id
   * @return {Promise<number>}
   */
  async getProductCountByCollectionId (id) {
    return this.product.count({collection_id: id})
  }

  /**
   * @return {Promise<ShopifyAccessTokenObject>}
   */
  async createStorefrontAccessToken () {
    return this.storefrontAccessToken.create({title: STOREFRONT_ACCESS_TOKEN_TITLE})
  }

  /**
   * @return {Promise<ShopifyAccessTokenObject[]>}
   */
  async getStorefrontAccessTokens () {
    return this.storefrontAccessToken.list()
  }

  /**
   * @return {Promise<string>}
   */
  async getStorefrontAccessToken () {
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

module.exports = ShopifyAdminClient
