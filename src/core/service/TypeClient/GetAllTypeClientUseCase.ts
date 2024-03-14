import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class GetAllTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async getAllTypeClient() {
    try {
      const response = await this.type_clientService.getAllTypeClient();

      return response.map((type_client) => ({
        id: type_client.id,
        code: type_client.code,
        name: type_client.name,
        description: type_client.description,
        status: type_client.status,
      }));
    } catch (error) {
      return error;
    }
  }
}
