const fetch = require('node-fetch')
const InvalidResponseError = require('../models/errors/InvalidResponseError')

/**
 * Class for interacting with the Shopify-APIs
 */
class Shopify {
  /**
   * @typedef {object} ShopifyConfig
   * @property {string} shopifyShopAlias
   * @property {string} shopifyAccessToken
   * @param {ShopifyConfig} ShopifyConfig
   */
  constructor (ShopifyConfig) {
    this.config = ShopifyConfig
    this.shopDomain = `https://${ShopifyConfig.shopifyShopAlias}.myshopify.com`
    this.targetTokenTitle = 'Access Token for WEBC-546' // TODO Has to be part of the config
  }

  /**
   * Returns the product count for collection endpoint
   * @param {string} collectionId
   * @returns {string}
   */
  getCollectionProductCountUrl (collectionId) {
    return this.shopDomain + '/admin/products/count.json?collection_id=' + collectionId
  }

  /**
   * Returns the GraphQL endpoint
   * @returns {string}
   */
  getGraphQlUrl () {
    return this.shopDomain + '/api/graphql'
  }

  /**
   * Returns the storefront access token endpoint
   * @returns {string}
   */
  getStorefrontAccessTokenUrl () {
    return this.shopDomain + '/admin/storefront_access_tokens.json'
  }

  /**
   * Returns the request header for sending requests to the Admin-API
   * @returns {object}
   */
  getAdminApiRequestHeader () {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.config.shopifyAccessToken
      }
    }
  }

  /**
   * Returns the request header for sending requests to the GraphQL-API, also get's the necessary storefront access token
   * @param {string} body
   * @returns {Promise.<{object}>}
   */
  async getGraphQlApiRequestHeader (body) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': await this.getStorefrontAccessToken()
      },
      body: body
    }
  }

  /**
   * Returns the storefront access token, which is requested via Admin-API
   * @returns {Promise.<{string}>}
   */
  async getStorefrontAccessToken () {
    const response = await fetch(this.getStorefrontAccessTokenUrl(), this.getAdminApiRequestHeader())

    let json = null

    try {
      /**
       * @typedef {object} json
       * @property {array} storefront_access_tokens
       */
      json = await response.json()
    } catch (err) {
      throw new InvalidResponseError(err.message)
    }

    if (!json.storefront_access_tokens) {
      throw new InvalidResponseError('Can\'t find json.storefront_access_tokens in response from Admin-API')
    }

    let token = null
    // Iterate through the tokens, we only need that one that's equal to the targetTokenTitle
    for (const storefrontAccessToken of json.storefront_access_tokens) {
      if (storefrontAccessToken.title === this.targetTokenTitle) {
        token = storefrontAccessToken.access_token
      }
    }

    if (!token) {
      throw new InvalidResponseError('Can\'t find matching Storefront-Accesstoken for \'' + this.targetTokenTitle + '\'')
    }

    return token
  }
}

module.exports = Shopify
