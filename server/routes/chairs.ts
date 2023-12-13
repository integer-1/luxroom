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

router.get('/latest', async (req, res) => {
  try {
    const chairs = await db.getLatestChairs()
    res.json(chairs)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get chairs')
  }
})


router.get('/:mainCategory', async (req, res) => {
  const main = req.params.mainCategory
  console.log(main)

  try {
    const chairs = await db.getChairByMain(main)
    res.json(chairs)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get chairs')
  }
})



export default router
