const EGRAPHQLAPIERROR = 'EGRAPHQLAPIERROR'

class GraphQlApiError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Can\'t get a valid response from the GraphQL-API.'
    )

    this.code = EGRAPHQLAPIERROR
    this.displayMessage = null
  }
}

module.exports = GraphQlApiError
