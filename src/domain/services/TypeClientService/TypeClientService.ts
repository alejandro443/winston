import { NewTypeClientDto } from 'src/core/shared/dto/TypeClient/type_client_dto';
import { TypeClientRepository } from 'src/domain/repositories/TypeClientRepository/TypeClientRepository';

export class TypeClientService {
  constructor(private repository?: TypeClientRepository) {
    this.repository = new TypeClientRepository();
  }

  async getOneTypeClient(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllTypeClient() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createTypeClient(type_client: NewTypeClientDto) {
    try {
      return this.repository?.create(type_client);
    } catch (error: any) {
      return error;
    }
  }

  async updateTypeClient(code: any, type_client: NewTypeClientDto) {
    try {
      return this.repository?.update(code, type_client);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeClient(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
