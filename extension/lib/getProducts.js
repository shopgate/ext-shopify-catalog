const ShopgateProductRepository = require('./shopgate/Product')
const ShopgateProductDefaultValues = require('./shopgate/product/DefaultValues')

/**
 * @param {PipelineContext} context
 * @param {GetProductsInput} input - Properties depend on the pipeline this is used for
 * @returns {Promise<GetProductsResponse>}
 */
module.exports = async (context, input) => {
  const getByCategoryId = input.hasOwnProperty('categoryId') && input.categoryId
  const getByProductIds = input.hasOwnProperty('productIds') && input.productIds

  if (!getByCategoryId && !getByProductIds) {
    return {
      totalProductCount: 0,
      products: []
    }
  }

  const shopgateProductRepository = ShopgateProductRepository.create(context)

  if (getByProductIds) {
    const products = await shopgateProductRepository.getByProductIds(
      input.productIds,
      input.hasOwnProperty('offset') ? input.offset : ShopgateProductDefaultValues.OFFSET,
      input.hasOwnProperty('limit') ? input.limit : ShopgateProductDefaultValues.LIMIT,
      input.hasOwnProperty('sort') ? input.sort : ShopgateProductDefaultValues.SORT,
      input.hasOwnProperty('showInactive') ? input.showInactive : ShopgateProductDefaultValues.SHOW_INACTIVE
    )

    context.log.debug('Successfully executed @shopgate/shopify-catalog/getProducts_v1.')
    context.log.debug('Result: ' + JSON.stringify(products))

    return products
  }

  if (getByCategoryId) {
    const products = await shopgateProductRepository.getByCategoryId(
      parseInt(input.categoryId),
      input.hasOwnProperty('offset') ? input.offset : ShopgateProductDefaultValues.OFFSET,
      input.hasOwnProperty('limit') ? input.limit : ShopgateProductDefaultValues.LIMIT,
      input.hasOwnProperty('sort') ? input.sort : ShopgateProductDefaultValues.SORT,
      input.hasOwnProperty('showInactive') ? input.showInactive : ShopgateProductDefaultValues.SHOW_INACTIVE
    )

    context.log.debug('Successfully executed @shopgate/shopify-catalog/getProducts_v1.')
    context.log.debug('Result: ' + JSON.stringify(products))

    return products
  }
}
