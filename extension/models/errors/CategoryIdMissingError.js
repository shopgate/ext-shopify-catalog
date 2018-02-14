const ECATEGORYIDMISSINGERROR = 'ECATEGORYIDMISSINGERROR'

class CategoryIdMissingError extends Error {
  constructor (message) {
    super((message !== null && message !== undefined)
      ? message
      : 'Can\'t get product count from category, because the Category-Id is missing.'
    )

    this.code = ECATEGORYIDMISSINGERROR
    this.displayMessage = null
  }
}

module.exports = CategoryIdMissingError
