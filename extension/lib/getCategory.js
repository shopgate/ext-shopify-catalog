const ShopgateCategoryExtensionPipeline = require('./shopgate/CategoryExtensionPipeline')

/**
 * @param {GetCategoryContext} context
 * @returns {Promise<GetCategoryResponse>}
 */
module.exports = async (context) => {
  const shopgateCategoryExtensionPipeline = ShopgateCategoryExtensionPipeline.create(context)
  try {
    return shopgateCategoryExtensionPipeline.getCategory(context.input.categoryId)
  } catch (error) {
    context.log.error(error)
    throw error
  }
}
