import db from '../db/connection.ts'
import { Chair, ChairDetail } from '../../models/chairs.ts'
import { Cart } from '../../models/cart.ts'

export async function getChairs(): Promise<Chair[]> {
  return db('chairs').select('*')
}

export async function getChairById(code: number): Promise<Chair[]> {
  return db('chairs').where({ code }).select()
}

export async function getChairByMain(mainCategory: string): Promise<Chair[]> {
  return db('chairs').where({ mainCategory }).select()
}

const oneMonthAgo = new Date()
oneMonthAgo.setDate(oneMonthAgo.getDate() - 30)

export async function getLatestChairs(): Promise<Chair[]> {
  return db('chairs').whereBetween('release_date', [oneMonthAgo, Date()])
}

export async function getDetail(): Promise<ChairDetail[]> {
  return db('chairs_detail').select('*')
}

export async function getCart(): Promise<Cart[]> {
  return db('cart').select('*')
}

export async function addCart(cart: Cart): Promise<Cart[]> {
  return db('cart')
    .insert({ ...cart })
    .returning(['id', 'auth0Id', 'item_code', 'quantity'])
}

export async function updateCart(id: number, updatedCart: Cart) {
  return db('recipes')
    .where({ id })
    .update({ ...updatedCart })
    .returning(['id', 'auth0Id', 'item_code', 'quantity'])
}

export async function deleteCart(id: number): Promise<void> {
  await db('cart').where({ id }).delete()
}
