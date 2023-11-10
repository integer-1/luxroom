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
