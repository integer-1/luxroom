import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'

import chairsRoutes from './routes/chairs.ts'
import chairRoutes from './routes/chair.ts'
import detailRoutes from './routes/detail.ts'
import cartRoutes from './routes/cart.ts'

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

export default server
