import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import server from '../server.ts'
import * as db from '../db/db.ts'

vi.mock('../db/db')

describe('GET /api/v1/chairs', () => {
  it('responds with chairs array on getChairs success', () => {
    vi.mocked(db.getChairs).mockImplementation(() =>
      Promise.resolve([
        {
          code: 1105,
          name: 'Vintage Bar Stool',
          price: 555,
          mainCategory: 'Kitchen',
          subCategory: 'Bar Stool',
          description:
            "Bring a touch of vintage charm to your kitchen with this bar stool. It's not only stylish but also comfortable, making it a great addition to your counter or bar area.",
          inStock: 12,
        },
      ])
    )
    return request(server)
      .get('/api/v1/chairs')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0].price).toBe(555)
      })
  })
  it('responds with 500 and error on getChairs rejection', () => {
    vi.mocked(db.getChairs).mockImplementation(async () =>
      Promise.reject(new Error('Could not get chairs'))
    )
    return request(server)
      .get('/api/v1/chairs')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('Could not get chairs')
      })
  })
})
