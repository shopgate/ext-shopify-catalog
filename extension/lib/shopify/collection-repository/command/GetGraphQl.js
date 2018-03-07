/**
 * @type ShopifyCollectionRepositoryCommandGet
 */
class ShopifyCollectionRepositoryCommandGetGraphQl {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {ShopifyCollectionRepositoryCommandCategoryIdentifierConverter} identifierConverter
   */
  constructor (storefrontClient, identifierConverter) {
    this._storefrontClient = storefrontClient
    this._identifierConverter = identifierConverter
  }

  /**
   *
   * @param {string} handle
   * @returns {Promise<ShopifyCollectionRepositoryCommandGetOutput>}
   */
  async execute (handle) {
    const query = this._storefrontClient.query((root) => {
      root.add('shop', shop => {
        shop.add('collectionByHandle', {
          args: {
            handle: handle
          }
        }, (collectionByHandle) => {
          collectionByHandle.add('id')
          collectionByHandle.add('handle')
          collectionByHandle.add('title')
          collectionByHandle.add('image', image => {
            image.add('originalSrc')
            image.add('transformedSrc')
          })
        })
      })
    })

    const response = await this._storefrontClient.send(query)

    return {
      id: this._identifierConverter.convert(response.data.shop.collectionByHandle.id),
      handle: response.data.shop.collectionByHandle.handle,
      title: response.data.shop.collectionByHandle.title,
      image: response.data.shop.collectionByHandle.image ? response.data.shop.collectionByHandle.image.originalSrc : ''
    }
  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @param {ShopifyCollectionRepositoryCommandCategoryIdentifierConverter} identifierConverter
 * @returns {ShopifyCollectionRepositoryCommandGet}
 */
module.exports = function (client, identifierConverter) {
  return new ShopifyCollectionRepositoryCommandGetGraphQl(client, identifierConverter)
}
