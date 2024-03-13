import { ClientService } from "src/domain/services/ClientService/ClientService"
import { NewClientDto } from "src/core/shared/dto/Client/client_dto";

export class CreateClientUseCase {

  constructor(
    private clientService?: ClientService
  ) {
    this.clientService = new ClientService()
  }
  
async createClient(client: NewClientDto) {
    try {
      var response = await this.clientService.createClient(client)
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