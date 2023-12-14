import request from 'superagent'
import { Cart , NewCart} from '../../models/cart'

const rootUrl = '/api/v1'

export async function getCart() {
  const res = await request.get(rootUrl + `/cart`)
  return res.body
}

export async function getCartByAuth0Id(auth0Id : string) {
  const res = await request.get(rootUrl + `/cart/${auth0Id}`)
  return res.body
}

export async function getCartByAuth0IdWithDetail(auth0Id : string) {
  const res = await request.get(rootUrl + `/cart/detail/${auth0Id}`)
  return res.body
}

export async function addCart(newCart: NewCart): Promise<void> {
  await request.post(rootUrl + '/cart').send({ ...newCart })
}

export async function updateCart({
  id,
  updatedCart,
}: {
  id: number
  updatedCart: Cart
}): Promise<void> {
  await request.patch(rootUrl + `/cart/${id}`).send(updatedCart)
}

export async function deleteCart(id: number): Promise<void> {
  await request.delete(rootUrl + `/cart/${id}`)
}
