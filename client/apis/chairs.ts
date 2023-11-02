/* eslint-disable @typescript-eslint/no-unused-vars */

import request from 'superagent'
import { FurnitureItems, FurnitureDetail } from '../../models/furniture.ts'

const url = '/api/v1/'

export async function getChairs(): Promise<FurnitureItems> {
  const res = await request.get(`${url}chairs`)
  return res.body
}

