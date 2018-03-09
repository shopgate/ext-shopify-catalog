const ShopifyProductRepository = require('../../../../../extension/lib/shopify/ProductRepository')
const ShopifyProductRepositoryCommandFactory = require('../../../../../extension/lib/shopify/product-repository/CommandFactory')
const ShopifyProduct = require('../../../../../extension/lib/shopify/Product')

const sinon = require('sinon')
const assert = require('assert')

describe('ShopifyProductRepositoryTest', function () {
  const commandFactoryStub = sinon.createStubInstance(ShopifyProductRepositoryCommandFactory)
  let subjectUnderTest
  beforeEach(() => {
    subjectUnderTest = new ShopifyProductRepository(commandFactoryStub)
  })

  it('listByCollectionId should map command response to the shopify product', async function () {
    const execute = { execute () {} }
    let executeMock = sinon.mock(execute)

    commandFactoryStub.createListByCollection.returns(execute)
    executeMock.expects('execute').withArgs('fake collection id', 0, 20, true).returns([
      {id: 1234, handle: 'men', title: 'test', image: 'image', price: 10.00, compareAtPrice: 20.00}
    ])
    const products = await subjectUnderTest.listByCollectionId('fake collection id', 0, 20, true)
    assert(commandFactoryStub.createListByCollection.called)
    assert.deepEqual(products, [
      new ShopifyProduct(1234, 'test', 'men', 10.00, 20.00, 'image')
    ])

    executeMock.verify()
    executeMock.restore()
  })

  it('listByIds should map command response to the shopify product', async function () {
    const execute = { execute () {} }
    let executeMock = sinon.mock(execute)

    commandFactoryStub.createListByIds.returns(execute)
    executeMock.expects('execute').withArgs([9999999], 0, 20, true).returns([
      {id: 9999999, handle: 'men', title: 'test', image: 'image', price: 10.00, compareAtPrice: 20.00}
    ])
    const products = await subjectUnderTest.listByIds([9999999], 0, 20, true)
    assert(commandFactoryStub.createListByIds.called)
    assert.deepEqual(products, [
      new ShopifyProduct(9999999, 'test', 'men', 10.00, 20.00, 'image')
    ])

    executeMock.verify()
    executeMock.restore()
  })
})
