const ShopifyCollectionVariants = require('./product/Variants')

class ShopifyProduct {
  constructor () {
    this._variants = new ShopifyCollectionVariants()
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
