class ShopgateProduct {
  /**
   * @param {string} id
   * @param {string} name
   * @param {string} featuredImageUrl
   * @param price
   */
  constructor (id, name, featuredImageUrl, price) {
    this._id = id
    this._featuredImageUrl = featuredImageUrl
    this._name = name
    this._price = price
  }

  /**
   * @returns {string}
   */
  get id () {
    return this._id
  }

  /**
   * @returns {string}
   */
  get featuredImageUrl () {
    return this._featuredImageUrl
  }

  /**
   * @returns {string}
   */
  get name () {
    return this._name
  }
}

module.exports = ShopgateProduct
