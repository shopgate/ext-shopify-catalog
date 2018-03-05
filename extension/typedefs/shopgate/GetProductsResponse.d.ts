interface GetProductsAvailability {
  text: string
  state: string
}

interface GetProductsIdentifiers {
  sku: string
  ean: string
  isbn: string
  upc: string
  pzn: string
  mpn: string
}

interface GetProductsPrice {
  tiers: GetProductsPriceTier[],
  info: string
  unitPrice: number
  unitPriceStriked: number
  unitPriceMin: number
  unitPriceMax: number
  unitPriceNet: number
  taxAmount: number
  taxPercent: number
  msrp: number
  currency: string
}

interface GetProductsPriceTier {
  from: number
  to: number
  unitPrice: number
}

interface GetProductsFlags {
  hasChildren: boolean
  hasVariants: boolean
  hasOptions: boolean
}

interface GetProductsLiveShopping {
  from: string
  to: string
}

interface Product {
  id: string
  active: boolean
  availability: GetProductsAvailability
  identifiers: GetProductsIdentifiers
  manufacturer: string
  name: string
  price: GetProductsPrice
  flags: GetProductsFlags
  liveshoppings: GetProductsLiveShopping[]
  parent: Product
  characteristics: Array
  type: string
  tags: string[]
}

interface GetProductsResponse {
  products: Product[]
  totalProductCount: number
}
