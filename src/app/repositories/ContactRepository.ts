import { v4 as uuid } from "uuid";

const contacts = [
  {
    id: uuid(),
    name: "Vitor",
    email: "vitor@email.com",
    phone: "123123",
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: "Jeniffer",
    email: "jeniffer@email.com",
    phone: "123123",
    category_id: uuid(),
  },
];

class ContactRepositoryModule {
  async findAll() {
    return contacts;
  }

  async findById(id: string) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }

  async delete(id: string) {
    const contactIndex = contacts.findIndex(
      ({ id: contactId }) => contactId === id
    );

    if (contactIndex === -1) {
      return false;
    }

    contacts.splice(contactIndex, 1);
    return true;
  }
}

export const ContactRepository = new ContactRepositoryModule();
