import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/:code', async (req, res) => {
  const code = Number(req.params.code)

  try {
    if (isNaN(code)) {
      throw new Error('Invalid code, must be a number')
    }

    const chair = await db.getChairByCode(code)
    res.json(chair)
  } catch (err) {
    res.status(500).send('Could not get chairs')
  }
})

export default router
