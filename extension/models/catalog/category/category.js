/**
 * Category Model
 */
class Category {

  /**
   * @param id
   * @param name
   * @param imageUrl
   * @param productCount
   * @param childrenCount
   */
  constructor (id, name, imageUrl, productCount = 0, childrenCount = 0) {
    this.id = id
    this.name = name
    this.productCount = productCount
    this.imageUrl = imageUrl
    this.childrenCount = childrenCount
  }
}

module.exports = Category
