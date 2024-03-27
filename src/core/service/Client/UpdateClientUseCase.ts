import { UpdateClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class UpdateClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async updateClient(code: any, client: UpdateClientDto) {
    try {
      const response: any = await this.clientService?.updateClient(
        code,
        client,
      );
      return {
        id: response.id,
        code: response.code,
        status: response.status,
        user_id: response.user_id,
        person_identification: response.person_identification,
        type_client_code: response.type_client_code,
      };
    } catch (error: any) {
      return error;
    }
  }
}
