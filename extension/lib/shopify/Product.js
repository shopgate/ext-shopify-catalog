const ShopifyCollectionVariants = require('./product/Variants')

class ShopifyProduct {
  /**
   * @param {number} id
   * @param {string} title
   * @param {string} handle
   * @param {number} price
   * @param {number} compareAtPrice
   * @param {string} image
   */
  constructor (id, title, handle, price, compareAtPrice, image) {
    this._id = id
    this._title = title
    this._handle = handle
    this._price = price
    this._compareAtPrice = compareAtPrice
    this._image = image
    this._variants = new ShopifyCollectionVariants()
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
  get title () {
    return this._title
  }

  /**
   * @returns {string}
   */
  get handle () {
    return this._handle
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

  /**
   * @returns {ShopifyProductVariant[]}
   */
  get variants () {
    return this._variants.get()
  }

  /**
   * @param {ShopifyProductVariant} variant
   */
  add (variant) {
    this._variants.add(variant)
  }
}

module.exports = ShopifyProduct
