interface CategoryChild {
  id: string
  name: string
  productCount: number
  imageUrl: string
  childrenCount: number
}

interface GetCategoryChildrenResponse {
  categories: CategoryChild[]
}
