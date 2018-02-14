/**
 * Contains all queries we're using with the GraphQL-API
 */
class graphQlQueries {
  /**
   * Return the Query-Body for getting all collections of a Sales-Channel
   * @returns {{query: string}}
   */
  static getRootCategories () {
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
        }`,
    }
  }
}

module.exports = graphQlQueries