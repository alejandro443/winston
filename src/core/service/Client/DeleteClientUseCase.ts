import { ClientService } from 'src/domain/services/ClientService/ClientService';

export class DeleteClientUseCase {
  constructor(private clientService?: ClientService) {
    this.clientService = new ClientService();
  }

  async deleteClient(id: number) {
    try {
      const response: any = await this.clientService?.deleteClient(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
