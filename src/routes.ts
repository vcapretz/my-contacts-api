import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  ContactController,
  BaseContactRequestParams,
} from "./app/controllers/ContactController";

export const routes = async (
  fastify: FastifyInstance,
  _options: FastifyPluginOptions
) => {
  fastify.get("/contacts", ContactController.index);
  fastify.get<{ Params: BaseContactRequestParams }>(
    "/contacts/:id",
    ContactController.show
  );
  fastify.delete<{ Params: BaseContactRequestParams }>(
    "/contacts/:id",
    ContactController.delete
  );
};
