/**
 * @type ShopifyCollectionRepositoryCommandGet
 */
class ShopifyCollectionRepositoryCommandGetGraphQl {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   */
  constructor (storefrontClient) {
    this._storefrontClient = storefrontClient
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

    try {
      const response = await this._storefrontClient.send(query)

      return {
        id: Buffer.from(response.data.shop.collectionByHandle.id, 'base64').toString().split('/').pop(),
        handle: response.data.shop.collectionByHandle.handle,
        title: response.data.shop.collectionByHandle.title,
        image: response.data.shop.collectionByHandle.image.originalSrc
      }
    } catch (err) {
      console.log(err)
    }
  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @returns {ShopifyCollectionRepositoryCommandGet}
 */
module.exports = function (client) {
  return new ShopifyCollectionRepositoryCommandGetGraphQl(client)
}
