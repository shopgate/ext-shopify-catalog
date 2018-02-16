const EMISSINGCONFIGERROR = 'EMISSINGCONFIGERROR'

class MissingConfigError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Extension-Config seems to have not all necessary values.'
    )

    this.code = EMISSINGCONFIGERROR
    this.displayMessage = null
  }
}

module.exports = MissingConfigError
