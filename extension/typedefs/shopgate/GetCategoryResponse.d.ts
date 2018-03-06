interface CategoryParent {
  id: string
  name: string
}

interface GetCategoryResponse {
  id: string
  name: string
  productCount: number
  imageUrl: string|null
  childrenCount: number
  parent: CategoryParent|null
  children?: CategoryChild[]
}
