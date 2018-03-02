const {isAccessForbidden, isServerError, isRequestFailedError} = require('../shopify/StorefrontClient')
const ShopgateAuthorisationRepository = require('./AuthorisationRepository')

/**
 * @param {ShopifyStorefrontClientAccessForbiddenError} err
 * @param {PipelineLogger} logger
 */
function logAccessForbidden (err, logger) {
  logger.error({
    msg: err.message,
    url: err.url
  })
}

/**
 * @param {ShopifyStorefrontClientRequestFailedError} err
 * @param {PipelineContext} context
 */
function logRequestFailed (err, logger) {
  logger.error({
    msg: err.message,
    url: err.url,
    statusCode: err.statusCode,
    requestBody: err.requestBody
  })
}

/**
 * @param {ShopifyStorefrontClientServerError} err
 * @param {PipelineLogger} logger
 */
function logServerError (err, logger) {
  logger.error({
    msg: err.message,
    url: err.url,
    statusCode: err.statusCode,
    requestBody: err.requestBody
  })
}

/**
 * @param {Error} err
 * @param {PipelineContext} context
 * @returns {boolean} handled
 */
module.exports = function (err, context) {
  if (isAccessForbidden(err)) {
    logAccessForbidden(/** @type {ShopifyStorefrontClientAccessForbiddenError} */err, context.log)
    ShopgateAuthorisationRepository.create(context)
      .releaseShopifyStorefrontToken()
      .catch((err) => {
        context.log.error({
          msg: 'Error releasing no longer valid token.',
          error: err.message,
          stack: err.stack
        })
    })
    return true
  }

  if (isServerError(err)) {
    logServerError(/** @type {ShopifyStorefrontClientServerError} */err, context.log)
    return true
  }

  if (isRequestFailedError(err)) {
    logRequestFailed(/** @type {ShopifyStorefrontClientRequestFailedError} */err, context.log)
    return true
  }

  return false
}
