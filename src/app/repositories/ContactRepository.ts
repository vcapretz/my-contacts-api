import { v4 as uuid } from "uuid";

const contacts = [
  {
    id: uuid(),
    name: "Vitor",
    email: "vitor@email.com",
    phone: "123123",
    category_id: uuid(),
  },
];

class ContactRepositoryModule {
  async findAll() {
    return contacts;
  }
}

export const ContactRepository = new ContactRepositoryModule();
