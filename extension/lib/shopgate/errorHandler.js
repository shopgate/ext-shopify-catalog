const shopifyStorefrontErrorHandler = require('./shopifyStorefrontErrorHandler')

/**
 * @param {Error} err
 * @param {PipelineContext} context
 */
module.exports = function (err, context) {
  if (shopifyStorefrontErrorHandler(err, context)) {
    return
  }

  context.log.error({
    msg: err.message,
    stack: err.stack
  })
}
