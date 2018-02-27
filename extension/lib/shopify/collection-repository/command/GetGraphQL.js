// const query = require('./Get-GraphQL-query')

class ShopifyCollectionRepositoryCommandGetGraphQL {
  /**
   * @param {ShopifyStorefrontClient} client
   */
  constructor (client) {
    this._client = client
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<ShopifyCollectionRepositoryCommandGetOutput>}
   */
  async execute (id) {

  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @returns {ShopifyCollectionRepositoryCommandGet}
 */
module.exports = function (client) {
  return /** @type {ShopifyCollectionRepositoryCommandGet} */new ShopifyCollectionRepositoryCommandGetGraphQL(client)
}
