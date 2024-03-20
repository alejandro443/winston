import { UpdateTypeClientDto } from '@dto/TypeClient/type_client_dto';
import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class UpdateTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async updateTypeClient(code: string, type_client: UpdateTypeClientDto) {
    try {
      const response = await this.type_clientService.updateTypeClient(
        code,
        type_client,
      );
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
