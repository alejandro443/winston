import { ClientService } from 'src/domain/services/ClientService/ClientService';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';

export class CreateClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async createClient(client: NewClientDto) {
    try {
      const response = await this.clientService.createClient(client);
      return {
        id: response.id,
        code: response.code,
        status: response.status,
        user_id: response.user_id,
        person_identification: response.person_identification,
        type_client_code: response.type_client_code,
      };
    } catch (error) {
      return error;
    }
  }
}
