import request from 'supertest'
import { app } from '../apps/api/src/index'

describe('POST /net-ev', () => {
  it('returns 422 on bad input', async () => {
    await request(app).post('/net-ev').send({ hand: 1 }).expect(422)
  })
})
