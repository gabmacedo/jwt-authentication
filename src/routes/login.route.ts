import { comparePassword } from "../utils/utils.js"
import { prisma } from "../lib/prisma.js"
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loginRoute(fastify: FastifyInstance) {
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as {
      email: string
      password: string
    }
    try {
      const user = await prisma.user.findUnique({ where: { email } })
      if (!user) {
        return reply.status(400).send({ error: "Invalid email or password" })
      }

      const isPasswordValid = await comparePassword(password, user.password)

      if (!isPasswordValid) {
        return reply.status(400).send({ error: "Invalid email or password" })
      }

      const token = fastify.jwt.sign({ userId: user.id }, { expiresIn: "1h" })

      return reply.status(200).send({ message: "Login successful", token })
    } catch (error) {
      return reply.status(500).send({ error: "Error logging in" })
    }
  })
}
