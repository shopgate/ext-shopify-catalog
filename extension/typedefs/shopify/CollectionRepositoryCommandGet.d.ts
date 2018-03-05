interface ShopifyCollectionRepositoryCommandGetOutput {
  id: string
  title: string
  handle: string
  image: string
}

interface ShopifyCollectionRepositoryCommandGet {
  execute (id : string) : Promise<ShopifyCollectionRepositoryCommandGetOutput>
}
