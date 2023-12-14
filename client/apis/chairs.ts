import request from 'superagent'

const rootUrl = '/api/v1'

export async function getChairs() {
  const res = await request.get(rootUrl + `/chairs`)
  return res.body
}

export async function getChairByMain(mainCategory: string) {
  const res = await request.get(rootUrl + `/chairs/${mainCategory}`)
  return res.body
}

export async function getLatestChairs() {
  const res = await request.get(rootUrl + `/chairs/latest`)
  return res.body
}

export async function getChairsDetail() {
  const res = await request.get(rootUrl + `/detail`)
  return res.body
}

export async function getChairByCode(code: number) {
  const res = await request.get(rootUrl + `/chair/${code}`)
  return res.body
}