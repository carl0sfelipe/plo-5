import { calculateEquity } from 'poker-sim'

test('returns number between 0 and 1', () => {
  const eq = calculateEquity('AhKhQhJhTh')
  expect(eq).toBeGreaterThanOrEqual(0)
  expect(eq).toBeLessThanOrEqual(1)
})
