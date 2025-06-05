import request from 'supertest'
import { app } from '../apps/api/src/index'

describe('POST /equity', () => {
  it('returns 422 on bad input', async () => {
    await request(app).post('/equity').send({ hand: 123 }).expect(422)
  })
})
