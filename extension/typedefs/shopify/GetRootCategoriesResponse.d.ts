interface CategoryChild {
    id: string
    name: string
    productCount: number
    imageUrl: string
    childrenCount: number
}

interface GetRootCategoriesResponse {
    id: string
    name: string
    productCount: number
    imageUrl: string|null
    childrenCount: number
    children?: CategoryChild[]
}
