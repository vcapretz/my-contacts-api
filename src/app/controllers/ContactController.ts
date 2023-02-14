import { FastifyRequest, FastifyReply } from "fastify";
import { ContactRepository } from "../repositories/ContactRepository";
class ContactControllerModule {
  async index(_request: FastifyRequest, _reply: FastifyReply) {
    return await ContactRepository.findAll();
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

// Singleton
export const ContactController = new ContactControllerModule();
