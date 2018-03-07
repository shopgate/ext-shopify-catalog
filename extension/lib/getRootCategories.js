const ShopgateCategoryRepository = require('./shopgate/CategoryRepository')
const shopgateErrorHandler = require('./shopgate/errorHandler')

/**
 * @param {PipelineContext} context
 * @returns {Promise<GetRootCategoriesResponse>}
 */
module.exports = async (context) => {
  try {
    const shopgateCategoryRepository = await ShopgateCategoryRepository.create(context)

    return await shopgateCategoryRepository.getRootCategories()
  } catch (error) {
    throw shopgateErrorHandler(error, context)
  }
}
