import { ClientService } from "src/domain/services/ClientService/ClientService"

export class GetOneClientUseCase {

  constructor(
    private clientService?: ClientService
  ) {
    this.clientService = new ClientService()
  }
  
  async getOneClient(code: string) {
    try {
      var response = await this.clientService.getOneClient(code)
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status
      }
    } catch (error) {
      return error
    }
  }
}