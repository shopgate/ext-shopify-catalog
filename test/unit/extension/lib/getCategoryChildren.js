const getCategoryChildren = require('../../../../extension/lib/getCategoryChildren')
const assert = require('assert')

describe('step getCategoryChildren', () => {
  it('should return an empty categories array because there is no real structure for categories in shopify', async () => {
    const response = await getCategoryChildren()
    assert.deepEqual([], response.categories)
  })
})
