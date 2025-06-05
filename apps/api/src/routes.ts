import { Request, Response } from 'express'
import { z } from 'zod'
import { calculateEquity } from 'poker-sim'

const equitySchema = z.object({
  hand: z.string(),
  board: z.string().optional(),
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
