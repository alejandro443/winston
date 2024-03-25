import { ClassificationService } from 'src/domain/services/ClassificationService/ClassificationService';

export class DeleteClassificationUseCase {
  constructor(private classificationService?: ClassificationService) {
    this.classificationService = new ClassificationService();
  }

  async deleteClassification(code: string) {
    try {
      const response: any =
        await this.classificationService?.deleteClassification(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
