const fetch = require('node-fetch')
const InvalidResponseError = require('../models/errors/InvalidResponseError')
const targetTokenTitle = 'Access Token for WEBC-546'
/**
 *
 * @param config
 * @returns {object}
 */
module.exports = function (config) {
  const module = {}
  const shopDomain = 'https://' + config.shopifyShopAlias + '.myshopify.com'

  module.getCollectionListingUrl = () => {
    return shopDomain + '/admin/collection_listings.json'
  }

  module.getCollectionProductCountUrl = (collectionId) => {
    return shopDomain + '/admin/products/count.json?collection_id=' + collectionId
  }

  module.getGraphQlUrl = () => {
    return shopDomain + '/api/graphql'
  }

  module.getStorefrontAccessTokenUrl = () => {
    return shopDomain + '/admin/storefront_access_tokens.json'
  }

  /**
   * Adds necessary Header-Information which are needed for the Request
   * @returns {object}
   */
  module.getAdminApiRequestHeader = () => {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': config.shopifyAccessToken
      }
    }
  }

  /**
   *
   * @param body
   * @returns {object}
   */
  module.getGraphQlApiRequestHeader = async (body) => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': await module.getStorefrontAccessToken()
      },
      body: body
    }
  }

  /**
   * @returns string
   */
  module.getStorefrontAccessToken = async () => {
    const response = await fetch(module.getStorefrontAccessTokenUrl(), module.getAdminApiRequestHeader())

    let json = null

    try {
      /**
       * @typedef {object} json
       * @property {array} storefront_access_tokens
       */
      json = await response.json()
    } catch (err) {
      console.debug(err)
      throw new InvalidResponseError()
    }

    if (!json.storefront_access_tokens) {
      throw new InvalidResponseError()
    }

    let token = null
    // Iterate through the tokens, we only need that one that's equal to the targetTokenTitle
    json.storefront_access_tokens.forEach((storefrontAccessToken) => {
      if (storefrontAccessToken.title === targetTokenTitle) {
        token = storefrontAccessToken.access_token
      }
    })

    if (!token) {
      throw new InvalidResponseError()
    }

    return token
  }


  return module
}
