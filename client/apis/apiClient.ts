import request from 'superagent'

const serverURL = '/api/v1'

export async function getPostApi() {
  const response = await request
    .get(`${serverURL}/addresses`)
  return response.body
}