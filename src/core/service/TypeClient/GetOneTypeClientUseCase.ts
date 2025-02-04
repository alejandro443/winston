import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class GetOneTypeClientUseCase {
  constructor(private classificationService?: TypeClientService) {
    this.classificationService = new TypeClientService();
  }

  async getOneTypeClient(id: number) {
    try {
      const response: any =
        await this.classificationService?.getOneTypeClient(id);
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
