import db from '../db/connection.ts'
import { FurnitureItems, FurnitureDetail } from '../../models/furniture.ts'

export async function getChairs(): Promise<FurnitureItems[]> {
  return db('chairs').select('*')
}

export async function getChairById(code: number): Promise<FurnitureItems[]> {
  return db('chairs').where({ code }).select()
}
export async function getDetail(): Promise<FurnitureDetail[]> {
  return db('detail').select('*')
}
