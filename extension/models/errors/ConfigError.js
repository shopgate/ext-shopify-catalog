const ECONFIGERROR = 'ECONFIGERROR'

class ConfigError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Extension-Config seems to be missing or invalid.'
    )

    this.code = ECONFIGERROR
    this.displayMessage = null
  }
}

module.exports = ConfigError
