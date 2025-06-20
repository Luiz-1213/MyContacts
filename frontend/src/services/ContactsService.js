import { env } from '../config/env';
import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(env.apiUrl);
  }

  async listContacts(orderBy, signal) {
    const contacts = await this.httpClient.get(
      `/contacts?orderBy=${orderBy || 'asc'}`,
      { signal },
    );

    return contacts.map(ContactMapper.toDomain);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.post('/contacts', { body });
  }

  async getContactById(id, signal) {
    const contact = await this.httpClient.get(`/contacts/${id}`, {
      signal,
    });
    return ContactMapper.toDomain(contact);
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
