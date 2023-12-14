import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cart = await db.getCart()
    res.json(cart)
  } catch (err) {
    res.status(500).send('Could not get cart')
  }
})

router.get('/:auth0Id', async (req, res) => {
  const auth0Id = req.params.auth0Id

  try {
    const cart = await db.getCartByAuth0Id(auth0Id)
    res.json(cart)
  } catch (err) {
    res.status(500).send('Could not get cart')
  }
})

router.get('/detail/:auth0Id', async (req, res) => {
  const auth0Id = req.params.auth0Id

  try {
    const cart = await db.getCartByAuth0IdWithDetail(auth0Id)
    res.json(cart)
  } catch (err) {
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
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  const updatedData = req.body

  if (!updatedData) {
    res.status(400).send('Bad Request: data is required')
    return
  }
  try {
    await db.updateCart(id, updatedData)
    res.sendStatus(200)
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
