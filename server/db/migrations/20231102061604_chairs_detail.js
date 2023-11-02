/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  await knex.schema.createTable('chairs_detail', (table) => {
    table.increments('item_code').primary()
    table.integer('height')
    table.integer('depth')
    table.integer('width')
    table.string('frameType')
    table.string('color')
    table.string('description')
    table.specificType('etc', 'text[]')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('chairs_detail')
}
