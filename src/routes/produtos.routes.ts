import { prisma } from "../lib/prisma.js"
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function produtosRoute(fastify: FastifyInstance) {
  fastify.get(
    "/",
    { preHandler: [fastify.authenticate] },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return reply.status(200).send({ hello: "world" })
    },
  )
}
