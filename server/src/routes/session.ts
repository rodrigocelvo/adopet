import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function sessionRoutes(fastify: FastifyInstance) {
  fastify.post("/me", async (request, response) => {
    const createUserBody = z.object({
      id: z.string(),
    });

    const { id } = createUserBody.parse(request.body);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return response.status(400).send({
        message: "User not found",
      });
    }

    return user;
  });
}
