import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { GenerateCodeClient } from '@src/core/shared/functions/generate_code_client.function';
import { PortfolioRepository } from '@src/domain/repositories/ClientRepository/PortfolioRepository';
import { CompanyRepository } from '@src/domain/repositories/CompanyRepository/CompanyRepository';
import { PersonRepository } from '@src/domain/repositories/PersonRepository/PersonRepository';
import { TypeEntity } from '@src/infraestructure/shared/enums/TypeEntity';
import { NewClientDto, UpdateClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientRepository } from 'src/domain/repositories/ClientRepository/ClientRepository';

export class ClientService {
  constructor(
    private repository?: ClientRepository,
    private repositoryPerson?: PersonRepository,
    private repositoryCompany?: CompanyRepository,
    private repositoryPortfolio?: PortfolioRepository,
  ) {
    this.repository = new ClientRepository();
    this.repositoryPerson = new PersonRepository();
    this.repositoryPortfolio = new PortfolioRepository();
    this.repositoryCompany = new CompanyRepository();
  }

  async getOnePortfolioClient(client_id: number) {
    try {
      const data_client_porfolio: any = await this.repositoryPortfolio?.portfolioOneClient(client_id);
      return data_client_porfolio;
    } catch (error: any) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async getOneClient(id: number) {
    try {
      return this.repository?.findOne(id);

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
      var entity: any;
    
      if(client.type_entity === TypeEntity.COMPANY){
        entity = await this.repositoryCompany.create(client.entity);
        client.entity_id = entity.id;
      }

      if (client.type_entity === TypeEntity.PERSON) {
        entity = await this.repositoryPerson.create(client.entity);
        client.entity_id = entity.id;
      }
      client.code = await GenerateCodeClient(entity.id, client.type_entity);

      return this.repository?.create(client, entity);
    } catch (error: any) {
      console.log("ClientService Domain", error)
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async updateClient(id: number, client: UpdateClientDto) {
    try {
      var entity: any;
      if(client.type_entity === TypeEntity.COMPANY){
        entity = await this.repositoryCompany.update(client.entity['main_identification'], client.entity);
        client.entity_id = entity.id;
      }

      if (client.type_entity === TypeEntity.PERSON) {
        entity = await this.repositoryPerson.update(client.entity['main_identification'], client.entity);
        client.entity_id = entity.id;
      }

      return this.repository?.update(id, client);
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }

  async deleteClient(id: number) {
    try {
      return this.repository?.deleted(id);
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

  async getOneClientByIdEntity(id: number, type_entity: string) {
    try {
      return this.repository?.findOneClientByIdEntity(id, type_entity);
    } catch (error: any) {
      return error;
    }
  }
}
