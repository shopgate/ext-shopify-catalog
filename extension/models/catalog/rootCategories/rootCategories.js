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
      this.id = category.collection_id.toString()
      this.name = category.title
      this.imageUrl = category.default_product_image.src
    })
  }
}

module.exports = RootCategories