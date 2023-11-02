export interface FurnitureItems {
  map(arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  code: number
  name: string
  price: number
  mainCategory: string
  SubCategory: string
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
