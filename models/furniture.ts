export interface FurnitureItems {
  code: number
  name: string
  price: number
  mainCategory: string
  subCategory: string
  description: string
  inStock: number
}

export interface FurnitureDetail {
  itemCode: number
  height: number
  depth: number
  width: number
  frameType: string
  color: string
  description: string
  etc: string[]
}
