class ShopifyCollectionRepositoryCommandChildrenGetCount {
  /**
   * @param {ShopifyAdminClient} adminClient
   */
  constructor (adminClient) {
    this._adminClient = adminClient
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<ShopifyCollectionRepositoryCommandChildrenGetCount>}
   */
  async execute (id) {
    return this._adminClient.product.count({collection_id: id})
  }
}

/**
 * @param {ShopifyAdminClient} adminClient
 * @returns {ShopifyCollectionRepositoryCommandChildrenGetCount}
 */
module.exports = function (adminClient) {
  return /** @type {ShopifyCollectionRepositoryCommandChildrenGetCount} */new ShopifyCollectionRepositoryCommandChildrenGetCount(adminClient)
}
