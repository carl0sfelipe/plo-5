import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.jackpot.create({
    data: { pool: 0, probability: 0, rakePercent: 0 }
  })
}
main().finally(() => prisma.$disconnect())
