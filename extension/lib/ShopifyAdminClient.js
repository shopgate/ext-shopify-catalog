const fetch = require('node-fetch')

class ShopifyAdminClient {
  /**
   * @param {string} shopDomain
   * @param {string} token
   * @param {string} apiKey
   * @param {string} secret
   */
  constructor (shopDomain, token, apiKey, secret) {
    this._shopDomain = shopDomain
    this._token = token
    this._apiKey = apiKey
    this._secret = secret
  }

  /**
   * @param {string} url
   * @param {Object|null} params
   * @return {Promise}
   */
  async get (url, params) {
    console.log('get query', this._buildQuery(params))
    const response = await fetch(this._shopDomain + url + this._buildQuery(params), this._buildFetchObject('GET', null))

    return response.json()
  }

  /**
   * @param {string} url
   * @param {Object|null} params
   * @return {Promise}
   */
  async post (url, params) {
    const response = await fetch(this._shopDomain + url, this._buildFetchObject('POST', params))

    return response.json()
  }

  /**
   * @param {string} url
   * @param {Object|null} params
   * @return {Promise}
   */
  async put (url, params) {
    const response = await fetch(this._shopDomain + url, this._buildFetchObject('PUT', params))

    return response.json()
  }

  /**
   * @param {string} url
   * @param {Object|null} params
   * @return {Promise}
   */
  async delete (url, params) {
    const response = await (this._shopDomain + url + this.buildQuery(params), this._buildFetchObject('DELETE', null))

    return response.json()
  }

  /**
   * @param {Object} queryObject
   * @return {string}
   */
  _buildQuery (queryObject) {
    let query = ''
    if (!queryObject) {
      return query
    }
    let isFirst = true
    for (let qIndex in queryObject) {
      if (isFirst) {
        query += '?'
        isFirst = false
      } else {
        query += '&'
      }
      const value = Array.isArray(queryObject[qIndex]) ? queryObject[qIndex].join() : queryObject[qIndex]
      query += encodeURIComponent(qIndex) + '=' + encodeURIComponent(value)
    }

    return query
  }

  /**
   * @param {string} method
   * @param {Object|null} body
   * @return {Object}
   */
  _buildFetchObject (method, body) {
    let fetchObject = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this._token
      }
    }
    if (body) {
      fetchObject.body = JSON.stringify(body)
    }

    return fetchObject
  }
}

module.exports = ShopifyAdminClient
