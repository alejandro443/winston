import { ClientService } from 'src/domain/services/ClientService/ClientService';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';

export class CreateClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async createClient(client: NewClientDto) {
    try {
      const response = await this.clientService.createClient(client);
      return { ...response.dataValues };
    } catch (error) {
      return error;
    }
  }
}
