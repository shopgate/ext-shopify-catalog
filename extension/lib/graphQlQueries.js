/**
 * Contains all queries we're using with the GraphQL-API
 */
class graphQlQueries {
  /**
   * Return the Query-Body for getting all collections of a Sales-Channel
   * @param {boolean} hasNextPage
   * @param {string} cursor
   * @returns {{query: string}}
   * @TODO Pagination via cursor with "after" property at collections filter
   */
  static getRootCategories (hasNextPage = false, cursor = '') {
    return {
      query: `
        query { 
          shop { 
            collections (first: 250) { 
              edges {
                cursor
                node {
                 id,
                 title,
                 image {
                  transformedSrc
                 }
                }
              },
              pageInfo {
                hasNextPage
              }
            } 
          } 
        }`
    }
  }
}

module.exports = graphQlQueries
