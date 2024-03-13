import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class GetAllClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async getAllClient() {
    try {
      const response = await this.clientService.getAllClient();

      return response.map((client) => ({
        id: client.id,
        code: client.code,
        status: client.status,
        user_id: client.user_id,
        person_identification: client.person_identification,
        type_client_code: client.type_client_code,
      }));
    } catch (error) {
      return error;
    }
  }
}
