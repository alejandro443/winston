import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class DeleteClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async deleteClient(code: string) {
    try {
      const response: any = await this.clientService?.deleteClient(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
