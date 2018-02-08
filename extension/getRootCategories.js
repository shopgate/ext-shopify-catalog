const fetch = require('node-fetch')
const RootCategories = require('./models/catalog/rootCategories/rootCategories')
let shopifyAccessToken = null
let Shopify = null

/**
 * @param context
 * @param input
 * @param cb
 * @returns {Promise.<void>}
 */
module.exports = async (context, input, cb) => {
  Shopify = require('./lib/shopify.api')(context.config)
  shopifyAccessToken = context.config.shopifyAccessToken

  /* Needs to be an Array because of the specifications */
  const rootCategories = []
  rootCategories.push(await getRootCategories())

  try {
    cb(null, {categories: rootCategories})
  } catch (err) {
    cb(err)
  }
}

/**
 * Get Root-Categories
 * @returns {Promise.<RootCategories>}
 */
async function getRootCategories () {
  const response = await fetch(Shopify.getCollectionListingUrl(), getRequestHeader())

  if (!response) {
    throw new Error('Invalid resonse.')
  }

  const json = await response.json()
  const rootCategories = new RootCategories()

  rootCategories.addCategories(json.collection_listings)

  //Get product count for each category
  if (Array.isArray(rootCategories)) {
    rootCategories.RootCategories.forEach(async (rootCategory) => {
      rootCategory.productCount = await getProductCount(rootCategory.id)
    })
  } else {
    rootCategories.productCount = await getProductCount(rootCategories.id)
  }

  return rootCategories
}

/**
 * Gets the productCount for the given rootCategoryId
 * @param rootCategoryId
 * @returns {Promise.<void>}
 */
async function getProductCount (rootCategoryId) {
  const response = await fetch(Shopify.getCollectionProductCountUrl(rootCategoryId), getRequestHeader())

  if (!response) {
    throw new Error('Invalid resonse.')
  }

  const json = await response.json()
  return json.count
}

/**
 * Adds necessary Header-Informations which are needed for the Request
 * @returns {object}
 */
function getRequestHeader () {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': shopifyAccessToken
    }
  }
}
