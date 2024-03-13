import { ClientService } from "src/domain/services/ClientService/ClientService"

export class GetAllClientUseCase {

  constructor(
    private clientService?: ClientService
  ) {
    this.clientService = new ClientService()
  }

  async getAllClient() {
    try {
      var response = await this.clientService.getAllClient()

      return response.map(client => ({
        id: client.id,
        code: client.code,
        name: client.name,
        description: client.description,
        status: client.status
      }))
    } catch (error) {
      return error
    }
  }
}