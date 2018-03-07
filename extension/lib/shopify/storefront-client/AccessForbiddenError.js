class ShopifyStorefrontClientAccessForbiddenError extends Error {
  constructor (url, shopifyStorefrontAccessToken) {
    super(`Forbidden access on ${url}`)
    this._url = url
    this._shopifyStorefrontAccessToken = shopifyStorefrontAccessToken
  }

  get url () {
    return this._url
  }

  get shopifyStorefrontAccessToken () {
    return this._shopifyStorefrontAccessToken
  }
}

module.exports = ShopifyStorefrontClientAccessForbiddenError
