import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import multer from "fastify-multer";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const upload = multer({ dest: "uploads/" });

export async function uploadRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/images/:fileName",
    async (
      request: FastifyRequest<{ Params: { fileName: string } }>,
      reply: FastifyReply
    ) => {
      const fileName = request.params.fileName;

      const filePath = path.join(__dirname, "uploads", "users", fileName);

      reply.sendFile(filePath);
    }
  );

  fastify.post(
    "/uploads/pet",
    { preHandler: upload.single("photo") },
    async (request: any, reply) => {
      const file = request.file;

      if (!file) {
        reply.code(400).send({ error: "No image available" });
        return;
      }

      const fileName = file.originalname;
      const fileExtension = fileName.substring(fileName.lastIndexOf("."));

      const newFileName = `pet-${Date.now()}${fileExtension}`;
      const oldPath = file.path;
      const newPath = `uploads/pets/${newFileName}`;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          reply.code(500).send({ error: "Error saving the image" });
          return;
        }
      });
      reply.code(201).send({ image: newFileName });
    }
  );

  fastify.post(
    "/uploads/users/:id",
    { preHandler: upload.single("image") },
    async (request: any, reply) => {
      const file = request.file;

      if (!file) {
        reply.code(400).send({ error: "No image available" });
        return;
      }

      const idUserParams = z.object({
        id: z.string(),
      });

      const { id } = idUserParams.parse(request.params);

      const fileName = file.originalname;
      const fileExtension = fileName.substring(fileName.lastIndexOf("."));

      const newFileName = `${id}${fileExtension}`;
      const oldPath = file.path;
      const newPath = `uploads/users/${newFileName}`;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          reply.code(500).send({ error: "Error saving the image" });
          return;
        }
      });
      reply.code(201).send({ image: newFileName });
    }
  );

  fastify.delete("/pets/image/:id", async (request, reply) => {
    const idUPetParams = z.object({
      id: z.string(),
    });

    const { id } = idUPetParams.parse(request.params);

    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
      select: {
        imgUrl: true,
      },
    });

    const imagePath = `uploads/pets/${pet?.imgUrl}`;

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(err);
        reply.code(500).send({ error: "Error deleting the image" });
        return;
      }

      reply.code(200).send();
    });
  });

  fastify.delete("/pets/image/notused", async (request, reply) => {
    try {
      const imgUrlsFromDatabase = await prisma.pet.findMany({
        select: {
          imgUrl: true,
        },
      });

      const imgUrlList = imgUrlsFromDatabase.map((pet) => pet.imgUrl);

      fs.readdir("uploads/pets", (err, files) => {
        if (err) {
          console.error(err);
          reply.code(500).send({ error: "Error listing image files" });
          return;
        }

        const unusedImageFiles = files.filter((file) => {
          return !imgUrlList.includes(file);
        });

        unusedImageFiles.forEach((file) => {
          const imagePath = `uploads/pets/${file}`;
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error(err);
            }
          });
        });

        reply.code(204).send();
      });
    } catch (error) {
      console.error(error);
      reply
        .code(500)
        .send({ error: "Error fetching image URLs from the database" });
    }
  });
}
