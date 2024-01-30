// @vitest-environment node
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection.ts'
import { getChairs, getChairByCode } from './db.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('Read data of chairs', () => {
  it('returns the correct chairs array', async () => {
    const chairs = await getChairs()

    expect(chairs).toHaveLength(9)
    expect(chairs[0]).toHaveProperty('price')
    expect(chairs[1].inStock).toBe(15)
  })

  it('returns the correct a chair by id', async () => {
    const chair = await getChairByCode(1101)

    expect(chair).toHaveLength(1)
    expect(chair[0].name).toBe('Gren-Latan-Oak-Chair')
    expect(chair[0].inStock).toBe(20)
  })
})
