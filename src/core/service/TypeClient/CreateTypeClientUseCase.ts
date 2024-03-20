import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';
import { NewTypeClientDto } from '@dto/TypeClient/type_client_dto';

export class CreateTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async createTypeClient(type_client: NewTypeClientDto) {
    try {
      const response =
        await this.type_clientService.createTypeClient(type_client);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error) {
      return error;
    }
  }
}
