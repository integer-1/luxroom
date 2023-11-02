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

router.get('/:code', async (req, res) => {
  const code = parseInt(req.params.code)
  console.log(code)
  if (isNaN(code)) {
    res.status(400).send('Bad Request: code must be a number')
    return
  }
  try {
    const chair = await db.getChairById(code)
    res.json(chair)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get chairs')
  }
})

export default router
