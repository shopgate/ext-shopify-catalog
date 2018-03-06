const ShopgateCategoryExtensionPipeline = require('./shopgate/CategoryExtensionPipeline')

/**
 * @param {PipelineContext} context
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
