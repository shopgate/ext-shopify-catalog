const GraphQlClient = require('graphql-js-client').default
const types = require('./GraphQlTypes').default
const fetch = require('node-fetch')

const ShopifyStorefrontClientAccessForbiddenError = require('./storefront-client/AccessForbiddenError')
const ShopifyStorefrontClientRequestFailedError = require('./storefront-client/RequestFailedError')
const ShopifyStorefrontClientServerError = require('./storefront-client/ServerError')

/**
 * @param {string} url
 * @param {Object} graphQLParams
 * @param {string} shopifyStoreFrontAccessToken
 * @return {Object}
 */
function fetcher (url, graphQLParams, shopifyStoreFrontAccessToken) {
  return fetch(url, {
    body: JSON.stringify(graphQLParams),
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Shopify-Storefront-Access-Token': shopifyStoreFrontAccessToken
    }
  }).then(function (response) {
    if (response.status === 200) {
      return response.json()
    }

    if (response.status === 403) {
      throw new ShopifyStorefrontClientAccessForbiddenError(url, shopifyStoreFrontAccessToken)
    }

    if (response.status >= 500) {
      throw new ShopifyStorefrontClientServerError(response.status, url, JSON.stringify(graphQLParams))
    }

    throw new ShopifyStorefrontClientRequestFailedError(response.status, url, JSON.stringify(graphQLParams))
  })
}

/**
 * @param {Error} error
 * @returns {boolean}
 */
function isAccessForbidden (error) {
  return error instanceof ShopifyStorefrontClientAccessForbiddenError
}

/**
 * @param {Error} error
 * @return {boolean}
 */
function isServerError (error) {
  return error instanceof ShopifyStorefrontClientServerError
}

/**
 * @param {Error} error
 * @return {boolean}
 */
function isRequestFailedError (error) {
  return error instanceof ShopifyStorefrontClientRequestFailedError
}

/**
 * @param {string} shopifyStorefrontAccessToken
 * @param {string} shopName
 * @returns {ShopifyStorefrontClient}
 */
function clientFactory (shopifyStorefrontAccessToken, shopName) {
  const url = 'https://' + shopName + '.myshopify.com/api/graphql'
  return new GraphQlClient(types, {
    fetcher: async (graphQLParams) => {
      return fetcher(url, graphQLParams, shopifyStorefrontAccessToken)
    }
  })
}

module.exports = {
  createClient: clientFactory,
  isAccessForbidden: isAccessForbidden,
  isServerError: isServerError,
  isRequestFailedError: isRequestFailedError
}
