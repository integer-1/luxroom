import express from 'express'
import { getDetail } from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {
  getDetail()
    .then((detail) => {
      res.json(detail)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
