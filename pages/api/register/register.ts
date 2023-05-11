import prisma from "@/@libs/prismadb"
import bcrypt from "bcrypt"

const handler = async (req: any, res: any) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({ message: "Bad Request" })
  }
  const hashedPassword = await bcrypt.hash(body.password, 12)

  const userData = {
    name: body.name,
    email: body.email,
    hashedPassword: hashedPassword,
  }

  const user = await prisma.user.create({
    data: userData,
  })

  return res.status(200).json(user)
}

export default handler
