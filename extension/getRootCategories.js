const fetch = require('node-fetch')
const RootCategories = require('./models/catalog/rootCategories/rootCategories')
const InvalidResponseError = require('./models/errors/InvalidResponseError')
const InvalidResponseFormatError = require('./models/errors/InvalidResponseFormatError')
const CategoryIdMissingError = require('./models/errors/CategoryIdMissingError')
const graphQlQueries = require('./lib/graphQlQueries')

/**
 * @param context
 * @param input
 * @param cb
 * @returns {function} cb
 */
module.exports = async (context, input, cb) => {
  const Shopify = require('./lib/shopify.api')(context.config)

  try {
    const categories = await getRootCategories(Shopify)
    cb(null, {categories})
  } catch (err) {
    cb(err)
  }
}

/**
 * @param Shopify
 * @returns {Promise.<Array>}
 */
getRootCategories = async (Shopify) =>  {
  const response = await fetch(
    Shopify.getGraphQlUrl(),
    await Shopify.getGraphQlApiRequestHeader(JSON.stringify(graphQlQueries.getRootCategories()))
  )

  let json = null
  try {
    /**
     * @typedef {object} json
     * @property {array} json.data.shop.collections.edges
     */
    json = await response.json()
  } catch (err) {
    throw new InvalidResponseError(err)
  }

  // Check if the response has the expected format
  if (!json.data.shop.collections.edges) {
    throw new InvalidResponseFormatError('Can\'t find json.data.shop.collections.edges in response from the GraphQL-Api')
  }

  const rootCategories = new RootCategories()

  try {
    rootCategories.addCategories(json.data.shop.collections.edges)
  } catch (err) {
    throw new InvalidResponseFormatError(err)
  }

  // Get product count for each category
  return await getCategoryProductCount(rootCategories, Shopify)
}

/**
 * #
 * @param rootCategories
 * @param Shopify
 * @returns Array
 */
getCategoryProductCount = async (rootCategories, Shopify) => {
  for (const rootCategory of rootCategories.categories) {
    if (!rootCategory.id) {
      throw new CategoryIdMissingError()
    }
    rootCategory.productCount = await getProductCount(rootCategory.id, Shopify)
  }

  return rootCategories.categories
}

/**
 * Gets the productCount for the given rootCategoryId
 * @param rootCategoryId
 * @param Shopify
 * @returns {Promise.<int>}
 */
getProductCount = async (rootCategoryId, Shopify) => {
  const response = await fetch(Shopify.getCollectionProductCountUrl(rootCategoryId), Shopify.getAdminApiRequestHeader())

  let json = null

  try {
    json = await response.json()
  } catch (err) {
    throw new InvalidResponseError(err)
  }

  return json.count
}
