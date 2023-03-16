import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function signup(req, res) {
  const { email, password, allergies, convives } = req.body

  if (!email || !password || !allergies || !convives ) {
    res.status(400).json({ message: 'Error' })
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(500).json({ message: 'Error creating user.' })
  }
}
