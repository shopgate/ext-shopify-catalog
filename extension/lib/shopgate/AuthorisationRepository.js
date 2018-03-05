const ShopgateExtensionStorage = require('./ExtensionStorage')
const ShopifyAdminClientFactory = require('../shopify/AdminClientFactory')

const STOREFRONT_AUTH_TOKEN = 'storefront-auth-token'

class AuthorisationRepository {

  /**
   * @param {ShopgateExtensionStorage} pipelineStorage
   * @param {ShopifyAdminClient} shopifyAdminClient
   */
  constructor (pipelineStorage, shopifyAdminClient) {
    this._pipelineStorage = pipelineStorage
    this._shopifyAdminClient = shopifyAdminClient
  }

  async acquireShopifyStorefrontToken () {
    let accessToken = await this._pipelineStorage.get(STOREFRONT_AUTH_TOKEN)
    if (!accessToken) {
      accessToken = await this._shopifyAdminClient.createStorefrontAccessToken()
      await this._pipelineStorage.set(STOREFRONT_AUTH_TOKEN, accessToken)
    }

    return accessToken
  }

  async releaseShopifyStorefrontToken () {
    return this._pipelineStorage.delete(STOREFRONT_AUTH_TOKEN)
  }

  /**
   * @param {PipelineContext} context
   * @returns {AuthorisationRepository}
   */
  static create (context) {
    const shopifyAdminFactory = new ShopifyAdminClientFactory(context.config.shopifyAccessToken, context.config.shopifyShopAlias)

    return new AuthorisationRepository(new ShopgateExtensionStorage(context.storage.extension), shopifyAdminFactory.create())
  }

}

module.exports = AuthorisationRepository
