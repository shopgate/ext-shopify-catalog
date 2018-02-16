const Category = require('../category/category')

/**
 * RootCategories Model
 */
class RootCategories {
  constructor () {
    this.categories = []
  }

  /**
   * @param {[object]} categories
   * @typedef {object} categories
   * @property {string} category.node.image.transformedSrc
   */
  addCategories (categories) {
    const regExp = new RegExp(/([0-9])\w+/)
    categories.forEach((category) => {
      /*
        The Id which comes from GraphQl is base64 decoded and got this format: gid://shopify/Collection/431422869
        Therefor we've to decode it and fetch the Id at the end of the string via regular expression
       */
      const id = regExp.exec(Buffer.from(category.node.id.toString(), 'base64').toString())[0]
      this.categories.push(new Category(id, category.node.title, category.node.image.transformedSrc))
    })
  }
}

module.exports = RootCategories
