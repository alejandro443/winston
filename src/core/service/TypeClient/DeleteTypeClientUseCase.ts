import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class DeleteTypeClientUseCase {
  constructor(private type_clientService?: TypeClientService) {
    this.type_clientService = new TypeClientService();
  }

  async deleteTypeClient(id: number) {
    try {
      const response: any =
        await this.type_clientService?.deleteTypeClient(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
