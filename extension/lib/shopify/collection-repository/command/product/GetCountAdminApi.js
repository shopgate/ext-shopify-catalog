class ShopifyCollectionRepositoryCommandProductGetCountAdminApi {
  /**
   * @param {ShopifyAdminClient} adminClient
   */
  constructor (adminClient) {
    this._adminClient = adminClient
  }

  /**
   * @param {number} id
   * @returns {Promise<number>}
   */
  async execute (id) {
    return this._adminClient.product.count({collection_id: id})
  }
}

/**
 * @param {ShopifyAdminClient} adminClient
 * @returns {ShopifyCollectionRepositoryCommandProductGetCountAdminApi}
 */
module.exports = function (adminClient) {
  return new ShopifyCollectionRepositoryCommandProductGetCountAdminApi(adminClient)
}
