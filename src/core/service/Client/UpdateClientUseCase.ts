import { UpdateClientDto } from '@dto/Client/client_dto';
import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class UpdateClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async updateClient(code: string, client: UpdateClientDto) {
    try {
      const response = await this.clientService.updateClient(code, client);
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
