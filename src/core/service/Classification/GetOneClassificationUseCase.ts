import { ClassificationService } from 'src/domain/services/ClassificationService/ClassificationService';

export class GetOneClassificationUseCase {
  constructor(private classificationService?: ClassificationService) {
    this.classificationService = new ClassificationService();
  }

  async getOneClassification(code: string) {
    try {
      const response: any =
        await this.classificationService?.getOneClassification(code);
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
