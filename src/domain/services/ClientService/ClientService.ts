import { GenerateCodeClient } from '@src/core/shared/functions/generate_code_client.function';
import { CompanyRepository } from '@src/domain/repositories/CompanyRepository/CompanyRepository';
import { PersonRepository } from '@src/domain/repositories/PersonRepository/PersonRepository';
import { TypeEntity } from '@src/infraestructure/shared/enums/TypeEntity';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientRepository } from 'src/domain/repositories/ClientRepository/ClientRepository';

export class ClientService {
  constructor(
    private repository?: ClientRepository,
    private repositoryPerson?: PersonRepository,
    private repositoryCompany?: CompanyRepository,
  ) {
    this.repository = new ClientRepository();
    this.repositoryPerson= new PersonRepository();
    this.repositoryCompany= new CompanyRepository();
  }

  async getOneClient(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllClient() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createClient(client: NewClientDto) {
    try {
      let entity: any;
      if(client.type_entity === TypeEntity.COMPANY){
        entity = await this.repositoryCompany.create(client.entity);
        client.company_id = entity.id;
      }

      if(client.type_entity === TypeEntity.PERSON){
        entity = await this.repositoryPerson.create(client.entity);
        client.person_id = entity.id;
      }

      client.code = await GenerateCodeClient(entity.id, client.type_entity);
      return this.repository?.create(client);
    } catch (error: any) {
      return error;
    }
  }

  async updateClient(code: any, client: NewClientDto) {
    try {
      return this.repository?.update(code, client);
    } catch (error: any) {
      return error;
    }
  }

  async deleteClient(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }

  async getOneClientByUserId(user_id: number) {
    try {
      return this.repository?.findOneByUser(user_id);
    } catch (error: any) {
      return error;
    }
  }
}
