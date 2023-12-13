import request from 'superagent'
import { Cart , NewCart} from '../../models/cart'

const rootUrl = '/api/v1'

export async function getCart() {
  const res = await request.get(rootUrl + `/cart`)
  return res.body
}

export async function addCart(newCart: NewCart): Promise<void> {
  await request.post(rootUrl + '/cart').send({ ...newCart })
}

export async function updateCart({
  id,
  cart,
}: {
  id: number
  cart: Cart
}): Promise<void> {
  await request.patch(rootUrl + `/cart/${id}`).send(cart)
}

export async function deleteCart(id: number): Promise<void> {
  await request.delete(rootUrl + `/cart/${id}`)
}
