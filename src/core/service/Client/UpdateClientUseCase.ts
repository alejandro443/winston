import { UpdateClientDto } from "src/core/shared/dto/Client/client_dto"
import { ClientService } from "src/domain/services/ClientService/ClientService"

export class UpdateClientUseCase {

  constructor(
    private clientService?: ClientService
  ) {
    this.clientService = new ClientService()
  }
  
async updateClient(code: string, client: UpdateClientDto) {
    try {
      var response = await this.clientService.updateClient(code, client)
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