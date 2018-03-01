const assert = require('assert')
const ShopifyAdminClient = require('../../../../../../../../extension/lib/shopify/AdminClient')
const GetCountAdminApi = require('../../../../../../../../extension/lib/shopify/collection-repository/command/product/GetCountAdminApi')
const integrationCredentials = require('../../../../../../../../.integration-credentials')

describe('GetCountAdminApi Command', () => {
  it('should return data', async () => {
    const shopifyAdminClient = new ShopifyAdminClient(integrationCredentials.accessToken, integrationCredentials.shopName)

    const getCommand = new GetCountAdminApi(shopifyAdminClient)

    assert.equal(1, await getCommand.execute(30963826751))
  })
})
