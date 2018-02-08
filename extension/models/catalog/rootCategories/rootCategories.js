const Category = require('../category/category')

/**
 * RootCategories Model
 */
class RootCategories extends Category{
  constructor() {
    super()
  }

  /**
   * @param {Array} categories
   */
  addCategories(categories) {
    categories.forEach((category) => {
      /*
        The Id which comes from GraphQl is base64 decoded and got this format: gid://shopify/Collection/431422869
        Therefor we've to decode it and fetch the Id at the end of the string via regular expression
       */
      const regExp = new RegExp(/([0-9])\w+/)
      this.id = regExp.exec(Buffer.from(category.node.id.toString(), 'base64').toString())[0]
      this.name = category.node.title
      this.imageUrl = category.node.image.transformedSrc
    })
  }
}

module.exports = RootCategories