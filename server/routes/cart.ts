import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cart = await db.getCart()
    res.json(cart)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get cart')
  }
})

router.post('/', async (req, res) => {
  const { ...newCart } = req.body
  try {
    const cart = await db.addCart(newCart)
    res.status(200).json({ cart })
  } catch (err) {
    res.status(500).send('Could not add new recipe')
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedData = req.body
    const updatedCart = await db.updateCart(id, updatedData)
    res.json(updatedCart[0])
  } catch (error) {
    res.status(500).json({ message: 'Cannot get update' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    db.deleteCart(id)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send('Could not delete cart')
  }
})

export default router
