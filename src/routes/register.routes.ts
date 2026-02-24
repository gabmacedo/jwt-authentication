import { encryptPassword } from "../utils/utils.js"
import { prisma } from "../lib/prisma.js"
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function registerRoute(fastify: FastifyInstance) {
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, email, password } = request.body as {
      name: string
      email: string
      password: string
    }

    if (!name || !email || !password) {
      return reply.status(400).send({ error: "Missing required fields" })
    }

    const alreadyExists = await prisma.user.findUnique({ where: { email } })

    if (alreadyExists) {
      return reply.status(400).send({ error: "User already exists" })
    }
    try {
      const createUser = await prisma.user.create({
        data: {
          name,
          email,
          password: await encryptPassword(password),
        },
      })

      return reply
        .status(201)
        .send({ message: "User created successfully", user: createUser })
    } catch (error) {
      return reply.status(500).send({ error: "Error creating user" })
    }
  })
}
