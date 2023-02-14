import { FastifyRequest, FastifyReply } from "fastify";

class ContactControllerModule {
  async index(_request: FastifyRequest, _reply: FastifyReply) {
    return { hello: "world" };
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

// Singleton
export const ContactController = new ContactControllerModule();
