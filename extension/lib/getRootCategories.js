const ShopgateCategoryExtensionPipeline = require('./shopgate/CategoryExtensionPipeline')

/**
 * @param {GetRootCategoriesContext} context
 * @returns {Promise<GetRootCategoriesResponse>}
 */
module.exports = async (context) => {
  const shopgateCategoryExtensionPipeline = ShopgateCategoryExtensionPipeline.create(context)
  try {
    return shopgateCategoryExtensionPipeline.getRootCategories()
  } catch (error) {
    context.log.error(error)
    throw error
  }
}
