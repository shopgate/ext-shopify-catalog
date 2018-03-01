// const query = require('./Get-GraphQL-query')

class ShopifyCollectionRepositoryCommandListGraphQL {
  /**
   * @param {ShopifyStorefrontClient} client
   */
  constructor (client) {
    this._storefrontClient = client
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<ShopifyCollectionRepositoryCommandGetOutput[]>}
   */
  async execute () {
    console.log('doing execute in listGraphQl')
    const query = this._storefrontClient.query((root) => {
      root.add('shop', shop => {
        shop.add('collections', {
          args: {
            first: 250
          }
        }, collections => {
          collections.add('edges', edges => {
            edges.add('node', node => {
              node.add('id')
              node.add('title')
              node.add('handle')
              node.add('image', image => {
                image.add('originalSrc')
                image.add('transformedSrc')
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

    try {
      const response = await this._storefrontClient.send(query)
      return response.data.shop.collections.edges.map(edge => {
        let image = null
        if (edge.node.image && edge.node.image.originalSrc) {
          image = edge.node.image.originalSrc
        }
        return {
          id: edge.node.id,
          title: edge.node.title,
          handle: edge.node.handle,
          image: image
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

/**
 * @param {ShopifyStorefrontClient} client
 * @returns {ShopifyCollectionRepositoryCommandListGraphQL}
 */
module.exports = function (client) {
  return /** @type {ShopifyCollectionRepositoryCommandListGraphQL} */new ShopifyCollectionRepositoryCommandListGraphQL(client)
}
