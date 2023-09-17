import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

import { generateUniqueId } from "../../utils/generateUniqueId";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users/count", async () => {
    const count = await prisma.user.count();

    return { count };
  });

  fastify.post("/users", async (request, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      city: z.string(),
      uf: z.string(),
    });

    const { name, email, phone, city, uf } = createUserBody.parse(request.body);

    try {
      const uniqueId = generateUniqueId();
      const userCreated = await prisma.user.create({
        data: {
          id: uniqueId,
          name,
          email,
          phone,
          city,
          uf,
        },
      });

      const { id } = userCreated;

      return reply.status(201).send({ code: id });
    } catch {
      return reply.status(400).send({
        message: "Not possible to create user",
      });
    }
  });

  fastify.get("/users", async (request, reply) => {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    reply.status(200);
    return user;
  });

  fastify.get("/users/:id", async (request, reply) => {
    const idUserParams = z.object({
      id: z.string(),
    });

    const { id } = idUserParams.parse(request.params);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return reply.status(400).send({
        message: "User not found",
      });
    }

    return user;
  });

  fastify.delete("/users/:id", async (request, reply) => {
    const idUserParams = z.object({
      id: z.string(),
    });

    const { id } = idUserParams.parse(request.params);

    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });

      return reply.status(204).send();
    } catch {
      return reply.status(400).send({
        message: "User not found.",
      });
    }
  });

  fastify.put("/users/:id", async (request, reply) => {
    const idUserParams = z.object({
      id: z.string(),
    });

    const { id } = idUserParams.parse(request.params);

    const updateUserBody = z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      city: z.string(),
      uf: z.string(),
    });

    const { name, email, phone, city, uf } = updateUserBody.parse(request.body);

    try {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          phone,
          city,
          uf,
        },
      });

      return reply.status(200).send();
    } catch {
      return reply.status(400).send({
        message: "User not found.",
      });
    }
  });

  fastify.patch("/users/image/:id", async (request, reply) => {
    const idUserParams = z.object({
      id: z.string(),
    });

    const { id } = idUserParams.parse(request.params);

    const createUserBody = z.object({
      avatar: z.string().nullable(),
    });

    const { avatar } = createUserBody.parse(request.body);

    try {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          avatarUrl: avatar,
        },
      });

      return reply.status(200).send();
    } catch {
      return reply.status(400).send({
        message: "Pet not found.",
      });
    }
  });
}
