import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { ContactController } from "./app/controllers/ContactController";

export const routes = async (
  fastify: FastifyInstance,
  _options: FastifyPluginOptions
) => {
  fastify.get("/contacts", ContactController.index);
};
