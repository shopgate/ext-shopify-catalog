const shopifyStorefrontErrorLogger = require('./pipeline/shopifyStorefrontErrorLogger')
const ShopgatePipelineCallFailedError = require('./pipeline/CallFailedError')
const {isAccessForbidden} = require('../shopify/StorefrontClient')
const ShopgateAuthorisationRepository = require('./AuthorisationRepository')

/**
 * @param {Error} err
 * @param {PipelineContext} context
 */
module.exports = function (err, context) {
  if (!shopifyStorefrontErrorLogger(err, context)) {
    context.log.error({
      msg: err.message,
      stack: err.stack
    })
  }

  if (isAccessForbidden(err)) {
    ShopgateAuthorisationRepository.create(context)
      .releaseShopifyStorefrontToken()
      .catch((err) => {
        context.log.error({
          msg: 'Error releasing no longer valid token.',
          error: err.message,
          stack: err.stack
        })
      })
  }

  // For now we have every error rethrown. If we have cases for swallowing errors, we should implement this at the time.
  return new ShopgatePipelineCallFailedError(err)
}
