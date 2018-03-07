class ShopgatePipelineCallFailedError extends Error {
  /**
   * @param {Error} previous
   */
  constructor (previous) {
    super('Failed processing pipeline request.')
    this._previous = previous
  }

  /**
   * @returns {Error}
   */
  get previous () {
    return this._previous
  }
}

module.exports = ShopgatePipelineCallFailedError
