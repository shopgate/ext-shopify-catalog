class ShopifyCollection {
  /**
   * @param {number} id
   * @param {string} handle
   * @param {string} title
   * @param {number} childrenCount
   * @param {number} productCount
   * @param {string} image
   * @param {array} children
   */
  constructor (id, handle, title, childrenCount, productCount, image, children) {
    this._id = id
    this._handle = handle
    this._title = title
    this._childrenCount = childrenCount
    this._productCount = productCount
    this._image = image
    this._children = children
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
  get handle () {
    return this._handle
  }

  /**
   * @returns {string}
   */
  get title () {
    return this._title
  }

  /**
   * @returns {number}
   */
  get childrenCount () {
    return this._childrenCount
  }

  /**
   * @returns {number}
   */
  get productCount () {
    return this._productCount
  }

  /**
   * @returns {string}
   */
  get image () {
    return this._image
  }

  /**
   * @returns {Array}
   */
  get children () {
    return this._children
  }
}

module.exports = ShopifyCollection
