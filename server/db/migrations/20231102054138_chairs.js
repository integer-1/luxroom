/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('chairs', (table) => {
    table.increments('code').primary()
    table.string('name')
    table.integer('price')
    table.string('mainCategory')
    table.string('subCategory')
    table.integer('description')
    table.integer('inStock')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('chairs')
}
