const EINVALIDRESPONSEFROMAT = 'EINVALIDRESPONSEFROMAT'

class InvalidResponseFormatError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Received an invalid response format.'
    )

    this.code = EINVALIDRESPONSEFROMAT
    this.displayMessage = null
  }
}

module.exports = InvalidResponseFormatError
