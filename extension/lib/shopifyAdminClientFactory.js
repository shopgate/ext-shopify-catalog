const ShopifyAdminClient = require('./shopifyAdminClient')

class ShopifyAdminClientFactory {
  /**
   * @param {Object} context
   */
  constructor (context) {
    this._shopName = context.config.shopDomain
    this._accessToken = context.config.token
  }

  /**
   * @return {ShopifyAdminClient}
   */
  createAdminClient () {
    return new ShopifyAdminClient({shopName: this._shopName, accessToken: this._accessToken})
  }
}
module.exports = ShopifyAdminClientFactory
