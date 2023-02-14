import { FastifyReply, FastifyRequest } from "fastify";
import { ContactRepository } from "../repositories/ContactRepository";

export type BaseContactRequestParams = {
  id: string;
};

class ContactControllerModule {
  async index() {
    return await ContactRepository.findAll();
  }

  async show(
    request: FastifyRequest<{ Params: BaseContactRequestParams }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      reply.status(404);
      return { error: "Contact not found" };
    }

    return contact;
  }

  store() {}

  update() {}

  async delete(
    request: FastifyRequest<{ Params: BaseContactRequestParams }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return { error: "Contact not found" };
    }

    await ContactRepository.delete(id);
    reply.status(204);
  }
}

// Singleton
export const ContactController = new ContactControllerModule();
