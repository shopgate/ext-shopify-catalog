/**
 * @param {object} config
 * @return {{}}
 */
module.exports = function (config) {
  const module = {}
  const shopDomain = 'https://' + config.shopifyShopAlias + '.myshopify.com'

  module.getCollectionListingUrl = function () {
    return shopDomain + '/admin/collection_listings.json'
  }

  module.getCollectionProductCountUrl = function (collectionId) {
    return shopDomain + '/admin/products/count.json?collection_id=' + collectionId
  }

  return module
}
