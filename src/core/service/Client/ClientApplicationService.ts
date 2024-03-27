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

export class ClientApplicationService implements ClientApplication {
  constructor(
    private getOneUseCase?: GetOneClientUseCase,
    private getAllUseCase?: GetAllClientUseCase,
    private createUseCase?: CreateClientUseCase,
    private updateUseCase?: UpdateClientUseCase,
    private deleteUseCase?: DeleteClientUseCase,
    private portfolioUseCase?: PortfolioClientUseCase,
  ) {
    this.getOneUseCase = new GetOneClientUseCase();
    this.getAllUseCase = new GetAllClientUseCase();
    this.createUseCase = new CreateClientUseCase();
    this.updateUseCase = new UpdateClientUseCase();
    this.deleteUseCase = new DeleteClientUseCase();
    this.portfolioUseCase = new PortfolioClientUseCase();
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

  async getOneClient(client_code: string): Promise<any> {
    try {
      return this.getOneUseCase?.getOneClient(client_code);
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

  async updateClient(code: any, client: UpdateClientDto): Promise<any> {
    try {
      return this.updateUseCase?.updateClient(code, client);
    } catch (error: any) {
      return error;
    }
  }

  async deleteClient(code: string) {
    try {
      return this.deleteUseCase?.deleteClient(code);
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
}
