export interface JackpotConfig {
  pool: number
  probability: number
  rakePercent: number
}

export function jackpotEV(config: JackpotConfig): number {
  return config.pool * config.probability
}

export interface NetEVParams {
  hand: string
  board?: string
  pot: number
  config: JackpotConfig
}

import { calculateEquity } from './equity'

export function calculateNetEV({ hand, board, pot, config }: NetEVParams): number {
  const equity = calculateEquity(hand, board)
  const potEV = equity * pot
  const jackpotValue = jackpotEV(config)
  const rake = (config.rakePercent / 100) * pot
  return potEV + jackpotValue - rake
}
