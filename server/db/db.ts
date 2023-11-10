import db from '../db/connection.ts'
import { Chair, ChairDetail } from '../../models/chairs.ts'

export async function getChairs(): Promise<Chair[]> {
  return db('chairs').select('*')
}

export async function getChairById(code: number): Promise<Chair[]> {
  return db('chairs').where({ code }).select()
}

export async function getChairByMain(
  mainCategory: string
): Promise<Chair[]> {
  return db('chairs').where({ mainCategory }).select()
}

export async function getDetail(): Promise<ChairDetail[]> {
  return db('detail').select('*')
}
