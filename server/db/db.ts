import db from '../db/connection.ts'
import { Chair, ChairDetail } from '../../models/chairs.ts'

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
  return db('detail').select('*')
}
