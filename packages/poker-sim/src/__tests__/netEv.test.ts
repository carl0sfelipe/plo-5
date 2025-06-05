import { calculateNetEV, JackpotConfig } from '../jackpot'

test('net EV computes with given jackpot', () => {
  const config: JackpotConfig = { pool: 1000, probability: 0.1, rakePercent: 5 }
  const ev = calculateNetEV({ hand: 'AhKhQhJhTh', pot: 100, config })
  expect(typeof ev).toBe('number')
})
