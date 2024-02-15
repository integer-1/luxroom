import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'
import axios from 'axios'
import qs from 'qs'

import chairsRoutes from './routes/chairs.ts'
import chairRoutes from './routes/chair.ts'
import detailRoutes from './routes/detail.ts'
import cartRoutes from './routes/cart.ts'

import dotenv from 'dotenv'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config()
  if (envConfig.error) throw envConfig.error
}
const client_id = process.env.POST_CLIENT_ID
const client_secret = process.env.POST_CLIENT_SECRET
const grant_type = 'client_credentials'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/chairs', chairsRoutes)
server.use('/api/v1/chair', chairRoutes)
server.use('/api/v1/detail', detailRoutes)
server.use('/api/v1/cart', cartRoutes)

server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

// POST API
server.post('/getAuthToken', async (req, res) => {
  try {
    // const response = await axios.post(
    //   'https://oauth.nzpost.co.nz/as/token.oauth2',
    //   {
    //     grant_type: 'client_credentials',
    //     client_id: client_id,
    //     client_secret: client_secret,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )

    const response = await axios.request({
      method: 'post',
      url: 'https://oauth.nzpost.co.nz/as/token.oauth2',
      data: {
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: client_secret,
      },
    })

    res.json(response.data)
    console.log(res.json(response.data))
  } catch (error) {
    // res.status(500).json({ message: 'Error getting with POST API token' })
    console.log(error)
    res.status(500).json({ message: 'Error getting with POST API token' })
  }
})

server.get('/makeAPICall', async (req, res) => {
  try {
    const { access_token } = req.query

    console.log(access_token)
    const response = await axios.get(
      'https://api.nzpost.co.nz/parceladdress/2.0/domestic',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with POST API' })
  }
})

export default server
