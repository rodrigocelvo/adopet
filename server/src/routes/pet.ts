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
          pet_name: name,
          pet_weight: weight,
          pet_birth_date: birthDate,
          pet_sex: sex,
          pet_breed: breed,
          pet_tags: tags,
          pet_description: description,
          pet_img_url: imgUrl,
          pet_adopted: adopted,
          pet_adopted_by: adoptedBy,
          pet_category: category,
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
            user_name: true,
            user_email: true,
            user_city_uf: true,
            user_city: true,
            user_phone: true,
            user_avatar_url: true,
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
          pet_name: name,
          pet_weight: weight,
          pet_birth_date: birthDate,
          pet_sex: sex,
          pet_breed: breed,
          pet_tags: tags,
          pet_description: description,
          pet_img_url: imgUrl,
          pet_adopted: adopted,
          pet_category: category,
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
        created_at: "desc",
      },
      take: 8,
    });
    reply.status(200);
    return pets;
  });
}
