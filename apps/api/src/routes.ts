import { Request, Response } from 'express'
import { z } from 'zod'
import { calculateEquity, calculateNetEV, JackpotConfig } from 'poker-sim'

const equitySchema = z.object({
  hand: z.string(),
  board: z.string().optional(),
})

const netEvSchema = z.object({
  hand: z.string(),
  board: z.string().optional(),
  pot: z.number(),
  config: z.object({
    pool: z.number(),
    probability: z.number(),
    rakePercent: z.number(),
  }),
})

export async function equityHandler(req: Request, res: Response) {
  try {
    const { hand, board } = equitySchema.parse(req.body)
    const equity = calculateEquity(hand, board)
    res.json({ equity })
  } catch (err) {
    res.status(422).json({ error: 'Invalid hand input' })
  }
}

export async function netEvHandler(req: Request, res: Response) {
  try {
    const data = netEvSchema.parse(req.body)
    const netEv = calculateNetEV({
      hand: data.hand,
      board: data.board,
      pot: data.pot,
      config: data.config as JackpotConfig,
    })
    res.json({ netEv })
  } catch (err) {
    res.status(422).json({ error: 'Invalid input' })
  }
}
