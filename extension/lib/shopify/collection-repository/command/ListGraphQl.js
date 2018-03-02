const DEFAULT_NUM_PER_PAGE = 250

class ShopifyCollectionRepositoryCommandListGraphQl {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   */
  constructor (storefrontClient) {
    this._storefrontClient = storefrontClient
    this._numberPerPage = DEFAULT_NUM_PER_PAGE
  }

  /**
   * @returns {Promise<ShopifyCollectionRepositoryCommandGetOutput[]>}
   */
  async execute () {
    const regExp = new RegExp(/([0-9])\w+/)
    const collectionsEdges = await this._makePaginatedRequests()
    return collectionsEdges.map(edge => {
      let image = null
      if (edge.node.image && edge.node.image.originalSrc) {
        image = edge.node.image.originalSrc
      }
      return {
        id: regExp.exec(Buffer.from(edge.node.id.toString(), 'base64').toString())[0],
        title: edge.node.title,
        handle: edge.node.handle,
        image: image
      }
    })
  }

  /**
   * @param {string?} cursor
   * @return {Promise<Object[]>}
   * @private
   */
  async _makePaginatedRequests (cursor) {
    let collectionsArguments = {first: this._numberPerPage}
    if (cursor) {
      collectionsArguments.after = cursor
    }
    const query = this._storefrontClient.query((root) => {
      root.add('shop', shop => {
        shop.add('collections', {
          args: collectionsArguments
        }, collections => {
          collections.add('edges', edges => {
            edges.add('cursor')
            edges.add('node', node => {
              node.add('id')
              node.add('title')
              node.add('handle')
              node.add('image', image => {
                image.add('originalSrc')
              })
            })
          })
          collections.add('pageInfo', pageInfo => {
            pageInfo.add('hasNextPage')
            pageInfo.add('hasPreviousPage')
          })
        })
      })
    })
    const response = await this._storefrontClient.send(query)
    const collections = response.data.shop.collections.edges
    if (response.data.shop && response.data.shop.collections && response.data.shop.collections.pageInfo.hasNextPage === true) {
      const lastCursor = collections[collections.length - 1].cursor
      Array.prototype.push.apply(collections, await this._makePaginatedRequests(lastCursor))
    }

    return collections
  }

  /**
   * @param {number} number
   */
  set numberPerPage (number) {
    this._numberPerPage = number
  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @returns {ShopifyCollectionRepositoryCommandListGraphQl}
 */
module.exports = function (client) {
  return new ShopifyCollectionRepositoryCommandListGraphQl(client)
}
