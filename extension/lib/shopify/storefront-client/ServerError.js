class ShopifyStorefrontClientServerError extends Error {
  /**
   * @param {number} statusCode
   * @param {string} url
   * @param {string} requestBody
   */
  constructor (statusCode, url, requestBody) {
    super(`Shopify server error.`)
    this._statusCode = statusCode
    this._url = url
    this._requestBody = requestBody
  }

  /**
   * @returns {number}
   */
  get statusCode () {
    return this._statusCode
  }

  /**
   * @returns {string}
   */
  get url () {
    return this._url
  }

  /**
   * @returns {string}
   */
  get requestBody () {
    return this._requestBody
  }
}

module.exports = ShopifyStorefrontClientServerError
