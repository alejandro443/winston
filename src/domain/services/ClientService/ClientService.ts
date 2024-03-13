import { NewClientDto } from "src/core/shared/dto/Client/client_dto";
import { ClientRepository } from "src/domain/repositories/ClientRepository/ClientRepository";

export class ClientService {
  constructor(
    private repository?: ClientRepository
  ) { 
    this.repository = new ClientRepository()
  }

  async getOneClient(code: string) {
    try {
      return this.repository.findOne(code)
    } catch (error) {
      return error
    }
  }
  
  async getAllClient() {
    try {
      return this.repository.findAll()
    } catch (error) {
      return error
    }
  }
  
  async createClient(classification: NewClientDto) {
    try {
      return this.repository.create(classification)
    } catch (error) {
      return error
    }
  }
  
  async updateClient(code: string, classification: NewClientDto) {
    try {
      return this.repository.update(code, classification)
    } catch (error) {
      return error
    }
  }
  
  async deleteClient(code: string) {
    try {
      return this.repository.deleted(code)
    } catch (error) {
      return error
    }
  }
}