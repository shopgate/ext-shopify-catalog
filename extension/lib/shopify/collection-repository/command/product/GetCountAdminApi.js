class ShopifyCollectionRepositoryCommandProductGetCountAdminApi {
  /**
   * @param {ShopifyAdminClient} adminClient
   */
  constructor (adminClient) {
    this._adminClient = adminClient
  }

  /**
   * @param {number} id Collection id
   * @returns {Promise<number>}
   */
  async execute (id) {
    return this._adminClient.getProductCountByCollectionId(id)
  }
}

module.exports = ShopifyCollectionRepositoryCommandProductGetCountAdminApi
