import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { equityHandler, netEvHandler } from './routes'

export const app = express()
app.use(express.json())
app.use(helmet())
app.use(rateLimit({ windowMs: 60000, max: 60 }))

app.post('/equity', equityHandler)
app.post('/net-ev', netEvHandler)

if (require.main === module) {
  const port = process.env.PORT || 4000
  app.listen(port, () => {
    console.log(`API listening on ${port}`)
  })
}
