class ShopgatePipelineCallFailedError extends Error {
  constructor (previous) {
    super('Failed processing pipeline request.')
    this._previous = previous
  }

  get previous () {
    return this._previous
  }
}

module.exports = ShopgatePipelineCallFailedError
