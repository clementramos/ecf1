import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function isAuthenticated(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) {
    throw new Error(`User not found for ID ${userId}`)
  }
  return user.is_authenticated
}
