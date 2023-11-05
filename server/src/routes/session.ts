import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { date, z } from "zod";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import { authenticate } from "../plugins/authenticate";

export async function sessionRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/me",
    {
      onRequest: [authenticate],
    },
    async (request) => {
      return { user: request.user };
    }
  );

  fastify.post("/login", async (request, reply) => {
    const userSchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = userSchema.parse(request.body);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      reply.code(401).send({ message: "User not found." });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      reply.code(401).send({ message: "Invalid credentials." });
      return;
    }

    const token = fastify.jwt.sign(
      {
        name: user.name,
        avatar: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: "7 days",
      }
    );

    return reply.send({ token });
  });

  fastify.post(
    "/revoketoken",
    { preHandler: authenticate },
    async (request, reply) => {
      const tokenToRevoke = request.headers.authorization;

      const tokenRevoked = String(tokenToRevoke?.replace("Bearer", "")).trim();

      try {
        const searchToken = await prisma.revokedToken.findUnique({
          where: {
            token: tokenRevoked,
          },
        });

        if (searchToken) {
          return reply.code(401).send({ message: "Token already revoked." });
        }

        await prisma.revokedToken.create({
          data: {
            token: tokenRevoked,
          },
        });

        reply.send({ message: "Token revoked." });
      } catch (error) {
        reply.code(500).send({ message: "Error revoking token." });
      }
    }
  );
}
