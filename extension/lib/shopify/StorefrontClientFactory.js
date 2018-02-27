const GraphQlClient = require('graphql-js-client').default
const fetch = require('node-fetch')
const types = require('./GraphQlTypes').default

// package 'graphql-js-client' tries to access a global method named 'fetch'
global.fetch = fetch

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
   * @returns GraphQlClient
   */
  create () {
    return new GraphQlClient(types, {
      url: 'https://' + this._shopName + '.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': this._shopifyStorefrontAccessToken
        }
      }
    })
  }
}

module.exports = StoreFrontApiFactory
