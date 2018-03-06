interface GetProductsInput {
  categoryId: string
  searchPhrase: string
  filters: Object
  offset: number
  limit: number
  sort: string
  showInactive
  productIds: string[]
  totalProductCount: number
}
