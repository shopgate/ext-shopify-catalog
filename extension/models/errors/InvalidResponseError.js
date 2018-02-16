const EINVALIDRESPONSE = 'EINVALIDRESPONSE'

class InvalidResponseError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Received an invalid response.'
    )

    this.code = EINVALIDRESPONSE
    this.displayMessage = null
  }
}

module.exports = InvalidResponseError
