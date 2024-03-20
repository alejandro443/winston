import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class DeleteTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async deleteTypeClient(code: string) {
    try {
      const response = await this.type_clientService.deleteTypeClient(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
