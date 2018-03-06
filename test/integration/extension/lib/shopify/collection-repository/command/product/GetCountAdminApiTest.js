const assert = require('assert')
const shopifyAdminClient = require('../../../../../../../../extension/lib/shopify/AdminClient')
const GetCountAdminApi = require('../../../../../../../../extension/lib/shopify/collection-repository/command/product/GetCountAdminApi')
const integrationCredentials = require('../../../../../../../../.integration-credentials')

describe('GetCountAdminApi Command', () => {
  it('should return data', async () => {
    const getCommand = new GetCountAdminApi(shopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName))

    assert.equal(1, await getCommand.execute(30963826751))
  })
})
