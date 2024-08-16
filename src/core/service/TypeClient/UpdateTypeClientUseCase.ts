import { UpdateTypeClientDto } from 'src/core/shared/dto/TypeClient/type_client_dto';
import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class UpdateTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async updateTypeClient(id: any, type_client: UpdateTypeClientDto) {
    try {
      const response: any = await this.type_clientService?.updateTypeClient(
        id,
        type_client,
      );
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
