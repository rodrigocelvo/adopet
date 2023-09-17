import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import multer from "fastify-multer";
import fs from "fs";
import path from "path";
import { z } from "zod";

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
}
