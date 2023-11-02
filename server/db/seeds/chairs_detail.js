import chairs_detail from '../data/chairs_detail.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('chairs_detail').del()
  await knex('chairs_detail').insert(chairs_detail)
}
