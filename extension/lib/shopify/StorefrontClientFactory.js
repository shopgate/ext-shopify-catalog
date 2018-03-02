
const { clientFactory } = require('./StorefrontClient')


class StoreFrontApiFactory {
  /**
   * @param {string} shopifyStorefrontAccessToken
   * @param {string} shopName
   */
  constructor (shopifyStorefrontAccessToken, shopName) {
    this._shopifyStorefrontAccessToken = shopifyStorefrontAccessToken
    this._shopName = shopName
  }

  /**
   * @returns {ShopifyStorefrontClient}
   */
  create () {
    return clientFactory(this._shopifyStorefrontAccessToken, this._shopName)
  }
}

module.exports = StoreFrontApiFactory
