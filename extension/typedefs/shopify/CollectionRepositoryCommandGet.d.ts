interface ShopifyCollectionRepositoryCommandGetOutput {
  id: string
  title: string
  handle: string
  image: string
}

interface ShopifyCollectionRepositoryCommandGet {
  execute (handle: string): Promise<ShopifyCollectionRepositoryCommandGetOutput>
}

interface ShopifyCollectionRepositoryCommandGetGraphQL extends ShopifyCollectionRepositoryCommandGet {

}
