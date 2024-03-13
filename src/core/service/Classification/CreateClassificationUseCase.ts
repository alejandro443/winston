import { ClassificationService } from 'src/domain/services/ClassificationService/ClassificationService';
import { NewClassificationDto } from 'src/core/shared/dto/Classification/classification_dto';

export class CreateClassificationUseCase {
  constructor(private classificationService?: ClassificationService) {
    this.classificationService = new ClassificationService();
  }

  async createClassification(classification: NewClassificationDto) {
    try {
      const response =
        await this.classificationService.createClassification(classification);
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
