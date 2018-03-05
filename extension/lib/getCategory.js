const ShopgateCategoryExtensionPipeline = require('./shopgate/CategoryExtensionPipeline')

/**
 * @param {PipelineContext} context
 * @param {GetCategoryInput} input
 * @returns {Promise<GetCategoryResponse>}
 */
module.exports = async (context, input) => {
  const shopgateCategoryExtensionPipeline = ShopgateCategoryExtensionPipeline.create(context)
  try {
    return shopgateCategoryExtensionPipeline.getCategory(input.categoryId)
  } catch (error) {
    context.log.error(error)
    throw error
  }
}
