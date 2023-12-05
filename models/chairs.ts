export interface Chair {
  code: number
  name: string
  price: number
  mainCategory: string
  subCategory: string
  description: string
  inStock: number
}

export interface ChairDetail {
  item_code: number
  height: number
  depth: number
  width: number
  frameType: string
  color: string
  detail: string
  feature_1: string
  feature_2: string
  feature_3: string
}
