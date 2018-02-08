/**
 * @param {object} config
 * @return {{}}
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

  /**
   * Adds necessary Header-Informations which are needed for the Request
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
   * Adds necessary Header-Informations which are needed for the Request
   * @param body
   * @returns {object}
   */
  module.getGraphQlApiRequestHeader = (body) => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': config.shopifyStorefrontAccessToken
      },
      body: body
    }
  }

  return module
}
