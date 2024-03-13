import { TypeClientService } from 'src/domain/services/TypeClientService/TypeClientService';

export class GetOneTypeClientUseCase {
  constructor(private classificationService?: TypeClientService) {
    this.classificationService = new TypeClientService();
  }

  async getOneTypeClient(code: string) {
    try {
      const response = await this.classificationService.getOneTypeClient(code);
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
