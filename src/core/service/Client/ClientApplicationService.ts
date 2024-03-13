import { ClientApplication } from "src/core/application/Client/ClientApplication";
import { NewClientDto, UpdateClientDto } from "src/core/shared/dto/Client/client_dto";
import { GetOneClientUseCase } from "./GetOneClientUseCase";
import { GetAllClientUseCase } from "./GetAllClientUseCase";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class ClientApplicationService implements ClientApplication {

  constructor(
    private getOneUseCase?: GetOneClientUseCase,
    private getAllUseCase?: GetAllClientUseCase,
    private createUseCase?: CreateClientUseCase,
    private updateUseCase?: UpdateClientUseCase,
    private deleteUseCase?: DeleteClientUseCase
  ) {
    this.getOneUseCase = new GetOneClientUseCase()
    this.getAllUseCase = new GetAllClientUseCase()
    this.createUseCase = new CreateClientUseCase()
    this.updateUseCase = new UpdateClientUseCase()
    this.deleteUseCase = new DeleteClientUseCase()
  }

  async getAllClient() {
    try {
      return this.getAllUseCase.getAllClient()
    } catch (error) {
      return error
    }
  }

  async getOneClient(client_code: string) {
    try {
      return this.getOneUseCase.getOneClient(client_code)
    } catch (error) {
      return error
    }
  }

  async createClient(client: NewClientDto) {
    try {
      return this.createUseCase.createClient(client)
    } catch (error) {
      return error
    }
  }

  async updateClient(code: string, client: UpdateClientDto) {
    try {
      return this.updateUseCase.updateClient(code, client)
    } catch (error) {
      return error
    }
  }

  async deleteClient(code: string) {
    try {
      return this.deleteUseCase.deleteClient(code)
    } catch (error) {
      return error
    }
  }

}