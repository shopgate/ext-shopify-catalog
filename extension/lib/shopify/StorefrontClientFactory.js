const GraphClient = require('graphql-js-client').default
const fetch = require('node-fetch')
const types = require('./GraphQlTypes').default

// package 'graphql-js-client' tries to access a global method named 'fetch'
global.fetch = fetch

class StoreFrontApiFactory {
  /**
   * @param {string} shopifyAdminApiAccessToken
   * @param {string} shopName
   */
  constructor (shopifyAdminApiAccessToken, shopName) {
    this._shopifyAdminApiAccessToken = shopifyAdminApiAccessToken
    this._shopName = shopName
  }

  /**
   * @returns GraphQlClient
   */
  create () {
    return new GraphClient(types, {
      url: 'https://' + this._shopName + '.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': this._shopifyAdminApiAccessToken
        }
      }
    })
  }
}

module.exports = StoreFrontApiFactory
