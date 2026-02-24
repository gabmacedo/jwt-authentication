import fastify, {
  type FastifyInstance,
  type FastifyRequest,
  type FastifyReply,
} from "fastify"
import fastifyJwt from "@fastify/jwt"

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>
  }
}

import { registerRoute } from "./routes/register.routes.js"
import { loginRoute } from "./routes/login.route.js"
import { produtosRoute } from "./routes/produtos.routes.js"

const app: FastifyInstance = fastify({ logger: true })

app.register(fastifyJwt, { secret: process.env.secret || "" })

app.decorate(
  "authenticate",
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.status(401).send({ error: "Unauthorized" })
    }
  },
)

app.get("/ping", async (_, reply) => {
  return reply.code(200).send({ ping: "pong" })
})

app.register(registerRoute, { prefix: "/auth/register" })
app.register(loginRoute, { prefix: "/auth/login" })
app.register(produtosRoute, { prefix: "/produtos" })

app.listen({ port: 3331 }, () => {
  console.log("servidor rodando em http://localhost:3331")
})
