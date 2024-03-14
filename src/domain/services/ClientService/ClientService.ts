import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientRepository } from 'src/domain/repositories/ClientRepository/ClientRepository';

export class ClientService {
  constructor(private repository?: ClientRepository) {
    this.repository = new ClientRepository();
  }

  async getOneClient(code: string) {
    try {
      return this.repository.findOne(code);
    } catch (error) {
      return error;
    }
  }

  async getAllClient() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return error;
    }
  }

  async createClient(client: NewClientDto) {
    try {
      return this.repository.create(client);
    } catch (error) {
      return error;
    }
  }

  async updateClient(code: string, client: NewClientDto) {
    try {
      return this.repository.update(code, client);
    } catch (error) {
      return error;
    }
  }

  async deleteClient(code: string) {
    try {
      return this.repository.deleted(code);
    } catch (error) {
      return error;
    }
  }
}
