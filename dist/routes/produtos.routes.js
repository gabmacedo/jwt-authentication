import { prisma } from "../lib/prisma.js";
export async function produtosRoute(fastify) {
    fastify.get("/", { preHandler: [fastify.authenticate] }, async (request, reply) => {
        return reply.status(200).send({ hello: "world" });
    });
}
//# sourceMappingURL=produtos.routes.js.map