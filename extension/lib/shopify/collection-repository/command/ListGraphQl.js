const DEFAULT_NUM_PER_PAGE = 250

class ShopifyCollectionRepositoryCommandListGraphQl {
  /**
   * @param {ShopifyStorefrontClient} storefrontClient
   * @param {number?} numberPerPage
   */
  constructor (storefrontClient, numberPerPage = DEFAULT_NUM_PER_PAGE) {
    this._storefrontClient = storefrontClient
    this._numberPerPage = numberPerPage
  }

  /**
   * @returns {Promise<ShopifyCollectionRepositoryCommandGetOutput[]>}
   */
  async execute () {
    const regExp = new RegExp(/([0-9])\w+/)
    const collectionsEdges = await this._fetchCollections()
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
  async _fetchCollections (cursor) {
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
      Array.prototype.push.apply(collections, await this._fetchCollections(lastCursor))
    }

    return collections
  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @param {number?} numberPerPage
 * @returns {ShopifyCollectionRepositoryCommandListGraphQl}
 */
module.exports = function (client, numberPerPage) {
  return new ShopifyCollectionRepositoryCommandListGraphQl(client, numberPerPage)
}
