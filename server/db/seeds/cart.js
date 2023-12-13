import cart from '../data/cart.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('cart').del()
  await knex('cart').insert(cart)
}
