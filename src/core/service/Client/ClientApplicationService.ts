import { ClientApplication } from 'src/core/application/Client/ClientApplication';
import {
  NewClientDto,
  UpdateClientDto,
} from 'src/core/shared/dto/Client/client_dto';
import { GetOneClientUseCase } from './GetOneClientUseCase';
import { GetAllClientUseCase } from './GetAllClientUseCase';
import { CreateClientUseCase } from './CreateClientUseCase';
import { UpdateClientUseCase } from './UpdateClientUseCase';
import { DeleteClientUseCase } from './DeleteClientUseCase';
import { PortfolioClientUseCase } from './PortfolioClientUseCase';
import { SearchByDocumentUseCase } from './SearchByDocumentUseCase';

export class ClientApplicationService implements ClientApplication {
  constructor(
    private getOneUseCase?: GetOneClientUseCase,
    private getAllUseCase?: GetAllClientUseCase,
    private createUseCase?: CreateClientUseCase,
    private updateUseCase?: UpdateClientUseCase,
    private deleteUseCase?: DeleteClientUseCase,
    private portfolioUseCase?: PortfolioClientUseCase,
    private searchByDocumentUseCase?: SearchByDocumentUseCase,
  ) {
    this.getOneUseCase = new GetOneClientUseCase();
    this.getAllUseCase = new GetAllClientUseCase();
    this.createUseCase = new CreateClientUseCase();
    this.updateUseCase = new UpdateClientUseCase();
    this.deleteUseCase = new DeleteClientUseCase();
    this.portfolioUseCase = new PortfolioClientUseCase();
    this.searchByDocumentUseCase = new SearchByDocumentUseCase();
  }

  async getAllClient() {
    try {
      const asd: any = await this.getAllUseCase?.getAllClient();
      console.log(asd);
      return asd;
    } catch (error: any) {
      return error;
    }
  }

  async getOneClient(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneClient(id);
    } catch (error: any) {
      return error;
    }
  }

  async createClient(client: NewClientDto) {
    try {
      return this.createUseCase?.createClient(client);
    } catch (error: any) {
      return error;
    }
  }

  async updateClient(id: number, client: UpdateClientDto): Promise<any> {
    try {
      return this.updateUseCase?.updateClient(id, client);
    } catch (error: any) {
      return error;
    }
  }

  async deleteClient(id: number) {
    try {
      return this.deleteUseCase?.deleteClient(id);
    } catch (error: any) {
      return error;
    }
  }

  async getPortfolioClient(): Promise<any> {
    try {
      return this.portfolioUseCase.getPortfolioClient();
    } catch (error: any) {
      return error;
    }
  }


  async SearchByDocument(identification: string) {
    try {
      if(identification.length == 8){
        return this.searchByDocumentUseCase.SearchByDocumentReniec(identification);
      }
      
      if(identification.length == 11){
        return this.searchByDocumentUseCase.SearchByDocumentSunat(identification);
      }

      return { message: "Longitud del documento no concuerda con nigun tipo de documento." }
    } catch (error: any) {
      return error;
    }
  }
}
