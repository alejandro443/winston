import { GenerateCodeClient } from '@src/core/shared/functions/generate_code_client.function';
import { NewClientDto } from '@dto/Client/client_dto';
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
      // TO DO: El segundo client.person_identification cambiarlo a el valor que identifica a la compañia
      client.code = await GenerateCodeClient(
        client.person_identification || client.person_identification,
      );
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

  async getOneClientByUserId(user_id: number) {
    try {
      return this.repository.findOneByUser(user_id);
    } catch (error) {
      return error;
    }
  }
}
