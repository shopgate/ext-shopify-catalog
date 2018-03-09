class ShopifyProductVariant {
  /**
   * @param {number} id
   * @param {string} sku
   * @param {number} price
   * @param {number} compareAtPrice
   * @param {string} image
   */
  constructor (id, sku, price, compareAtPrice, image) {
    this._id = id
    this._sku = sku
    this._price = price
    this._compareAtPrice = compareAtPrice
    this._image = image
  }

  /**
   * @returns {number}
   */
  get id () {
    return this._id
  }

  /**
   * @returns {string}
   */
  get sku () {
    return this._sku
  }

  /**
   * @returns {number}
   */
  get price () {
    return this._price
  }

  /**
   * @returns {number}
   */
  get compareAtPrice () {
    return this._compareAtPrice
  }

  /**
   * @returns {string}
   */
  get image () {
    return this._image
  }
}

module.exports = ShopifyProductVariant
