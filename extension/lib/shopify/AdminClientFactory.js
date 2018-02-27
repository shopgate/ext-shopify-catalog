const ShopifyAdminClient = require('./AdminClient')

class ShopifyAdminClientFactory {
  /**
   * @param {string} adminAccessToken
   * @param {string} shopName
   */
  constructor (adminAccessToken, shopName) {
    this._adminAccessToken = adminAccessToken
    this._shopName = shopName
  }

  /**
   * @return {ShopifyAdminClient}
   */
  create () {
    return new ShopifyAdminClient(this._adminAccessToken, this._shopName)
  }
}

module.exports = ShopifyAdminClientFactory
