class ShopifyStorefrontClientRequestFailedError extends Error {
  constructor (statusCode, url, requestBody) {
    super(`Request failed on ${url}`)

    this._statusCode = statusCode
    this._url = url
    this._requestBody = requestBody
  }

  get statusCode () {
    return this._statusCode
  }

  get url () {
    return this._url
  }

  get requestBody () {
    return this._requestBody
  }
}

module.exports = ShopifyStorefrontClientRequestFailedError
