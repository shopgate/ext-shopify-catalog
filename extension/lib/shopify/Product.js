const ShopifyCollectionVariants = require('./product/Variants')

class ShopifyProduct {
  /**
   * @param {number} id
   * @param {string} title
   * @param {string} handle
   * @param {number} price
   * @param {number} compareAtPrice
   * @param {ShopifyProductImage[]} images
   */
  constructor (id, title, handle, price, compareAtPrice, images) {
    this._id = id
    this._title = title
    this._handle = handle
    this._price = price
    this._compareAtPrice = compareAtPrice
    this._images = images
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
   * @returns {ShopifyProductImage[]}
   */
  get images () {
    return this._images
  }

  /**
   * @param {ShopifyProductImage} image
   */
  addImage (image) {
    this._images.push(image)
  }

  /**
   * @returns {ShopifyProductImage|null}
   */
  get mainImage () {
    return this._images.find((image) => {
      return image.position === 1
    }) || null
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
