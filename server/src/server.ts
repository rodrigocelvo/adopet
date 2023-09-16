import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import formBody from "@fastify/formbody";
import cors from "@fastify/cors";
import multer from "fastify-multer";

import path from "path";

import { userRoutes } from "./routes/user";
import { uploadRoutes } from "./routes/upload";
import { sessionRoutes } from "./routes/session";
import { petRoutes } from "./routes/pet";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
    bodyLimit: 1024 * 1024 * 10,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(formBody);
  await fastify.register(multer.contentParser);

  const __dirname = path.resolve(path.dirname(""));
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "uploads"),
    prefix: "/public/images/",
  });

  await fastify.register(sessionRoutes);
  await fastify.register(userRoutes);
  await fastify.register(petRoutes);
  await fastify.register(uploadRoutes);

  await fastify.listen({ port: 3333 });
}

bootstrap();
