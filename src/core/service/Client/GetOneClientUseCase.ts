import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class GetOneClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async getOneClient(id: number) {
    try {
      const response: any = await this.clientService?.getOneClient(id);
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
