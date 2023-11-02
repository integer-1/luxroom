import chairs from '../data/chairs.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('chairs').del()
  await knex('chairs').insert(chairs)
}
