import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function petRoutes(fastify: FastifyInstance) {
  fastify.get("/pets/count", async () => {
    const count = await prisma.pet.count();

    return { count };
  });

  fastify.post("/pets/new", async (request, response) => {
    const createPetBody = z.object({
      name: z.string(),
      weight: z.string(),
      birthDate: z.string(),
      sex: z.string(),
      breed: z.string(),
      tags: z.string(),
      description: z.string(),
      imgUrl: z.string(),
      category: z.string(),
      adopted: z.boolean(),
      adoptedBy: z.string().nullable(),
      authorId: z.string(),
    });

    const {
      name,
      weight,
      birthDate,
      sex,
      breed,
      tags,
      description,
      imgUrl,
      category,
      adopted,
      adoptedBy,
      authorId,
    } = createPetBody.parse(request.body);

    try {
      await prisma.pet.create({
        data: {
          name: name,
          weight: weight,
          birthDate,
          sex: sex,
          breed: breed,
          tags: tags,
          description: description,
          imgUrl,
          adopted: adopted,
          adoptedBy,
          category: category,
          authorId,
        },
      });

      return response.status(201).send();
    } catch {
      return response.status(400).send({
        message: "Not possible to create pet",
      });
    }
  });

  fastify.get("/pets", async () => {
    const pets = await prisma.pet.findMany();
    return pets;
  });

  fastify.get("/pets/:id", async (request, response) => {
    const idPetParams = z.object({
      id: z.string(),
    });

    const { id } = idPetParams.parse(request.params);

    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            name: true,
            email: true,
            uf: true,
            city: true,
            phone: true,
            avatarUrl: true,
          },
        },
      },
    });

    if (!pet) {
      return response.status(400).send({
        message: "Pet not found",
      });
    }

    return pet;
  });

  fastify.delete("/pets/:id", async (request, response) => {
    const idPetParams = z.object({
      id: z.string(),
    });

    const { id } = idPetParams.parse(request.params);

    try {
      await prisma.pet.delete({
        where: {
          id,
        },
      });

      return response.status(204).send();
    } catch {
      return response.status(400).send({
        message: "Pet not found.",
      });
    }
  });

  fastify.put("/pets/:id", async (request, response) => {
    const idPetParams = z.object({
      id: z.string(),
    });

    const { id } = idPetParams.parse(request.params);

    const createPetBody = z.object({
      name: z.string(),
      weight: z.string(),
      birthDate: z.string(),
      sex: z.string(),
      breed: z.string(),
      tags: z.string(),
      description: z.string(),
      imgUrl: z.string(),
      category: z.string(),
      adopted: z.boolean(),
    });

    const {
      name,
      weight,
      birthDate,
      sex,
      breed,
      tags,
      description,
      imgUrl,
      category,
      adopted,
    } = createPetBody.parse(request.body);

    try {
      await prisma.pet.update({
        where: {
          id,
        },
        data: {
          name,
          weight,
          birthDate,
          sex,
          breed,
          tags,
          description,
          imgUrl,
          adopted,
          category,
        },
      });

      return response.status(200).send();
    } catch {
      return response.status(400).send({
        message: "Pet not found.",
      });
    }
  });

  fastify.get("/pets/lasts", async (request, reply) => {
    const pets = await prisma.pet.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 8,
    });
    reply.status(200);
    return pets;
  });

  fastify.post("/pets/:userId/adopt/:petId", async (request, response) => {
    const idPetParams = z.object({
      userId: z.string(),
      petId: z.string(),
    });

    const { userId, petId } = idPetParams.parse(request.params);

    const adoptPetBody = z.object({
      adopted: z.boolean(),
    });

    try {
      const petVerify = await prisma.pet.findUnique({
        where: {
          id: petId,
        },
        select: {
          adopted: true,
        },
      });

      console.log(petVerify);

      if (petVerify?.adopted)
        return response.status(400).send({
          message: "Pet already adopted.",
        });

      const { adopted } = adoptPetBody.parse(request.body);

      await prisma.pet.update({
        where: {
          id: petId,
        },
        data: {
          adoptedBy: userId,
          adopted: adopted,
        },
      });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).send({
        message: "Pet not found or invalid request body.",
      });
    }
  });

  fastify.patch("/pets/image/:id", async (request, reply) => {
    const idPetParams = z.object({
      id: z.string(),
    });

    const { id } = idPetParams.parse(request.params);

    const createPetBody = z.object({
      imgUrl: z.string().nullable(),
    });

    const { imgUrl } = createPetBody.parse(request.body);

    try {
      await prisma.pet.update({
        where: {
          id,
        },
        data: {
          imgUrl,
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
