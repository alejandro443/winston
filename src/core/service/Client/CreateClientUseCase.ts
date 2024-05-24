import { ClientService } from 'src/domain/services/ClientService/ClientService';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';

export class CreateClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async createClient(client: NewClientDto) {
    try {
      const response: any = await this.clientService?.createClient(client);
      
      if(!response) {
        throw new ClientApplicationError('Error en la creación de cliente.', 'INTERNAL_SERVER_ERROR')
      }

      return { ...response.dataValues };
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }
}
