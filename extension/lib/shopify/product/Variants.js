class ShopifyProductVariants {
  constructor () {
    this._variants = []
  }

  /**
   * @param {ShopifyProductVariant} variant
   */
  add (variant) {
    this._variants.push(variant)
  }

  /**
   * @returns {ShopifyProductVariant[]}
   */
  get () {
    return this._variants
  }
}

module.exports = ShopifyProductVariants
