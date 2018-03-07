const ShopgateCategoryRepository = require('./shopgate/CategoryRepository')
const shopgateErrorHandler = require('./shopgate/errorHandler')

/**
 * @param {PipelineContext} context
 * @param {GetCategoryInput} input
 * @returns {Promise<GetCategoryResponse>}
 */
module.exports = async (context, input) => {
  try {
    const shopgateCategoryRepository = await ShopgateCategoryRepository.create(context)

    return await shopgateCategoryRepository.getCategory(input.categoryId)
  } catch (error) {
    throw shopgateErrorHandler(error, context)
  }
}
