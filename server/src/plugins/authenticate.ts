import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await request.jwtVerify();

  const token = request.headers.authorization;
  const tokenRevoked = String(token?.replace("Bearer", "")).trim();

  const revokedToken = await prisma.revokedToken.findUnique({
    where: { token: tokenRevoked },
  });

  if (revokedToken) {
    reply.code(401).send({ message: "Token is not valid." });
    return;
  }
}
