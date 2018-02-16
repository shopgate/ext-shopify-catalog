const fetch = require('node-fetch')
const RootCategories = require('./models/catalog/rootCategories/rootCategories')
const InvalidResponseError = require('./models/errors/InvalidResponseError')
const InvalidResponseFormatError = require('./models/errors/InvalidResponseFormatError')
const CategoryIdMissingError = require('./models/errors/CategoryIdMissingError')
const graphQlQueries = require('./lib/graphQlQueries')
const Shopify = require('./lib/shopify.api')
const MissingConfigError = require('./models/errors/MissingConfigError')

/**
 * /**
 * @typedef {object} config
 * @property {string} config.shopifyShopAlias
 * @property {string} config.shopifyAccessToken
 * @param {object} context
 * @returns {function} cb
 */
module.exports = async (context) => {
  const shopify = new Shopify(context.config)

  // Small verification if the config includes the minimum values we need here
  if (!shopify.config.shopifyShopAlias || !shopify.config.shopifyAccessToken) {
    throw new MissingConfigError()
  }

  try {
    const categories = await getRootCategories(shopify)
    return {categories}
  } catch (err) {
    throw new InvalidResponseError(err.message)
  }
}

/**
 * @param {Shopify} shopify
 * @returns {Promise.<Array>}
 */
getRootCategories = async (shopify) =>  {

  const response = await fetch(
    shopify.getGraphQlUrl(),
    await shopify.getGraphQlApiRequestHeader(JSON.stringify(graphQlQueries.getRootCategories()))
  )

  let json = null
  try {
    /**
     * @typedef {object} json
     * @property {[Object]} json.data.shop.collections.edges
     */
    json = await response.json()
  } catch (err) {
    throw new InvalidResponseError(err.message)
  }

  // Check if the response has the expected format
  if (!json.data.shop.collections.edges) {
    throw new InvalidResponseFormatError('Can\'t find json.data.shop.collections.edges in response from the GraphQL-API')
  }

  const rootCategories = new RootCategories()

  try {
    rootCategories.addCategories(json.data.shop.collections.edges)
  } catch (err) {
    throw new InvalidResponseFormatError(err.message)
  }

  // Get product count for each category
  return await getCategoryProductCount(rootCategories, shopify)
}

/**
 * #
 * @param {RootCategories} rootCategories
 * @param {Shopify} shopify
 * @returns Array
 */
getCategoryProductCount = async (rootCategories, shopify) => {
  for (const rootCategory of rootCategories.categories) {
    if (!rootCategory.id) {
      throw new CategoryIdMissingError()
    }
    rootCategory.productCount = await getProductCount(rootCategory.id, shopify)
  }

  return rootCategories.categories
}

/**
 * Gets the productCount for the given rootCategoryId
 * @param {string} rootCategoryId
 * @param {Shopify} shopify
 * @returns {Promise.<int>}
 */
getProductCount = async (rootCategoryId, shopify) => {
  const response = await fetch(shopify.getCollectionProductCountUrl(rootCategoryId), shopify.getAdminApiRequestHeader())

  let json = null

  try {
    json = await response.json()
  } catch (err) {
    throw new InvalidResponseError(err.message)
  }

  return json.count
}
