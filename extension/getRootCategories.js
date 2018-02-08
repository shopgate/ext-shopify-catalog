const fetch = require('node-fetch')
const RootCategories = require('./models/catalog/rootCategories/rootCategories')
let Shopify = null

/**
 * @param context
 * @param input
 * @param cb
 * @returns {Promise.<void>}
 */
module.exports = async (context, input, cb) => {
  Shopify = require('./lib/shopify.api')(context.config)

  try {
    /* Needs to be an Array because of the specifications */
    const rootCategories = []
    rootCategories.push(await getRootCategories())

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
  const response = await fetch(
    Shopify.getGraphQlUrl(),
    Shopify.getGraphQlApiRequestHeader(JSON.stringify(getGraphQlBody()))
  )

  if (!response) {
    throw new Error('Invalid resonse.')
  }

  const json = await response.json()
  const rootCategories = new RootCategories()
  rootCategories.addCategories(json.data.shop.collections.edges)

  //Get product count for each category
  if (Array.isArray(rootCategories)) {
    rootCategories.RootCategories.forEach(async (rootCategory) => {
      rootCategory.productCount = await getProductCount(rootCategory.id)
    })

    return rootCategories
  }

  rootCategories.productCount = await getProductCount(rootCategories.id)
  return rootCategories
}

/**
 * Return the Query-Body which will be send to the GraphQl-API
 * @returns {{query: string}}
 */
function getGraphQlBody () {
  return {
    query: `
    query { 
      shop { 
        collections (first: 250) { 
          pageInfo { 
            hasNextPage,hasPreviousPage
          },
          edges { 
            node {
             id,
             title,
             image {
              transformedSrc
             }
            } 
          } 
        } 
      } 
    }`,
  }
}

/**
 * Gets the productCount for the given rootCategoryId
 * @param rootCategoryId
 * @returns {Promise.<void>}
 */
async function getProductCount (rootCategoryId) {
  const response = await fetch(Shopify.getCollectionProductCountUrl(rootCategoryId), Shopify.getAdminApiRequestHeader())

  if (!response) {
    throw new Error('Invalid resonse.')
  }

  const json = await response.json()
  return json.count
}
