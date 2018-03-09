class ShopifyCollection {
  constructor (id, handle, title, childrenCount, productCount, image, children) {
    this._id = id
    this._handle = handle
    this._title = title
    this._childrenCount = childrenCount
    this._productCount = productCount
    this._images = image
    this._children = children
  }

  get id () {
    return this._id
  }

  get handle () {
    return this._handle
  }

  get title () {
    return this._title
  }

  get childrenCount () {
    return this._childrenCount
  }

  get productCount () {
    return this._productCount
  }

  get image () {
    return this._images
  }

  get children () {
    return this._children
  }
}

module.exports = ShopifyCollection
