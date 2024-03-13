import { TypeClientApplication } from "src/core/application/TypeClient/TypeClientApplication";
import { NewTypeClientDto, UpdateTypeClientDto } from "src/core/shared/dto/TypeClient/type_client_dto";
import { GetOneTypeClientUseCase } from "./GetOneTypeClientUseCase";
import { GetAllTypeClientUseCase } from "./GetAllTypeClientUseCase";
import { CreateTypeClientUseCase } from "./CreateTypeClientUseCase";
import { UpdateTypeClientUseCase } from "./UpdateTypeClientUseCase";
import { DeleteTypeClientUseCase } from "./DeleteTypeClientUseCase";

export class TypeClientApplicationService implements TypeClientApplication {

  constructor(
    private getOneUseCase?: GetOneTypeClientUseCase,
    private getAllUseCase?: GetAllTypeClientUseCase,
    private createUseCase?: CreateTypeClientUseCase,
    private updateUseCase?: UpdateTypeClientUseCase,
    private deleteUseCase?: DeleteTypeClientUseCase
  ) {
    this.getOneUseCase = new GetOneTypeClientUseCase()
    this.getAllUseCase = new GetAllTypeClientUseCase()
    this.createUseCase = new CreateTypeClientUseCase()
    this.updateUseCase = new UpdateTypeClientUseCase()
    this.deleteUseCase = new DeleteTypeClientUseCase()
  }

  async getAllTypeClient() {
    try {
      return this.getAllUseCase.getAllTypeClient()
    } catch (error) {
      return error
    }
  }

  async getOneTypeClient(type_client_code: string) {
    try {
      return this.getOneUseCase.getOneTypeClient(type_client_code)
    } catch (error) {
      return error
    }
  }

  async createTypeClient(type_client: NewTypeClientDto) {
    try {
      return this.createUseCase.createTypeClient(type_client)
    } catch (error) {
      return error
    }
  }

  async updateTypeClient(code: string, type_client: UpdateTypeClientDto) {
    try {
      return this.updateUseCase.updateTypeClient(code, type_client)
    } catch (error) {
      return error
    }
  }

  async deleteTypeClient(code: string) {
    try {
      return this.deleteUseCase.deleteTypeClient(code)
    } catch (error) {
      return error
    }
  }

}