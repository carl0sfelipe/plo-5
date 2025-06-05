export interface JackpotConfig {
  pool: number
  probability: number
  rakePercent: number
}

export function jackpotEV(config: JackpotConfig): number {
  return (config.pool * config.probability) - config.rakePercent
}
