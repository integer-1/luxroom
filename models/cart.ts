export interface Cart {
  id: number
  auth0Id: string
  item_code: number
  quantity: number
}
export interface CartWithDetail {
  id: number
  auth0Id: string
  item_code: number
  quantity: number
  name: string
  price: number
}


export interface NewCart {
  auth0Id: string
  item_code: number
  quantity: number
}


