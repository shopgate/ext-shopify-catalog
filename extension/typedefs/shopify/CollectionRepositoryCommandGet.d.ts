interface ShopifyCollectionRepositoryCommandGetOutput {
    id : string
    title : string
}

interface ShopifyCollectionRepositoryCommandGet {
  execute (id : string) : Promise<ShopifyCollectionRepositoryCommandGetOutput>
}
