/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('cart', (table) => {
    table.increments('id').primary()
    table.string('auth0Id')
    table.integer('item_code')
    table.integer('quantity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('cart')
}
