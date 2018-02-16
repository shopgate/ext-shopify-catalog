/**
 * Category Model
 */
class Category {

  /**
   * @param {string} id
   * @param {string} name
   * @param {string} imageUrl
   * @param {int} productCount
   * @param {int} childrenCount
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
