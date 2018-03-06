class ShopifyCollectionRepositoryCommandCategoryIdentifierConverter {
  /**
   * The Id which comes from GraphQl is base64 decoded and got this format: gid://shopify/Collection/431422869
   * Therefor we've to decode it and fetch the Id at the end of the string via regular expression
   *
   * @param {string} graphQlUid
   * @returns {number} collectionId
   */
  convert (graphQlUid) {
    return parseInt(Buffer.from(graphQlUid, 'base64').toString().split('/').pop())
  }
}

module.exports = ShopifyCollectionRepositoryCommandCategoryIdentifierConverter
