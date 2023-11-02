import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const chairs = await db.getChairs()
    res.json(chairs)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get chairs')
  }
})

router.get('/', async (req, res) => {
  try {
    const chairs = await db.getChairs()
    res.json(chairs)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get chairs')
  }
})

export default router
