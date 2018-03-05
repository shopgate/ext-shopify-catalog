interface CategoryChild {
    id: string
    name: string
    productCount: number
    imageUrl: string
    childrenCount: number
}

interface RootCategory {
    id: string
    name: string
    productCount: number
    imageUrl: string|null
    childrenCount: number
    children?: CategoryChild[]
}

interface GetRootCategoriesResponse {
    categories: RootCategory[]
}

