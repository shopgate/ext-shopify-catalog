const ShopgateExtensionStorage = require('./ExtensionStorage')
const shopifyAdminClient = require('../shopify/AdminClient')

const STOREFRONT_AUTH_TOKEN = 'storefront-auth-token'

class ShopgateAuthorisation {
  /**
   * @param {ShopgateExtensionStorage} pipelineStorage
   * @param {ShopifyAdminClient} shopifyAdminClient
   */
  constructor (pipelineStorage, shopifyAdminClient) {
    this._pipelineStorage = pipelineStorage
    this._shopifyAdminClient = shopifyAdminClient
  }

  /**
   * @returns {Promise<string>}
   */
  async acquireShopifyStorefrontToken () {
    let shopifyStorefrontAcessToken = await this._pipelineStorage.get(STOREFRONT_AUTH_TOKEN)
    if (!shopifyStorefrontAcessToken) {
      const tokenResponse = await this._shopifyAdminClient.createStorefrontAccessToken()
      shopifyStorefrontAcessToken = tokenResponse.access_token

      await this._pipelineStorage.set(STOREFRONT_AUTH_TOKEN, shopifyStorefrontAcessToken)
    }

    return shopifyStorefrontAcessToken
  }

  /**
   * @returns {Promise<void>}
   */
  async releaseShopifyStorefrontToken () {
    return this._pipelineStorage.delete(STOREFRONT_AUTH_TOKEN)
  }

  /**
   * @param {PipelineContext} context
   * @returns {ShopgateAuthorisation}
   */
  static create (context) {
    return new ShopgateAuthorisation(
      new ShopgateExtensionStorage(context.storage.extension),
      shopifyAdminClient(context.config.shopifyAccessToken, context.config.shopifyShopAlias))
  }
}

module.exports = ShopgateAuthorisation
