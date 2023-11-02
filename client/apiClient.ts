/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { FurnitureItems } from '../models/furnitureItems'
import { FurnitureDetail } from '../models/furnitureDetail'

const url = '/api/v1/'

export async function getChairs(): Promise<FurnitureItems> {
  const res = await request.get(`${url}chairs`)
  return res.body
}


export async function getDetail():Promise<FurnitureDetail> {
  const res = await request.get(`${url}detail`)
  return res.body
}