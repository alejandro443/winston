import { UpdateClassificationDto } from 'src/core/shared/dto/Classification/classification_dto';
import { ClassificationService } from 'src/domain/services/ClassificationService/ClassificationService';

export class UpdateClassificationUseCase {
  constructor(private classificationService?: ClassificationService) {
    this.classificationService = new ClassificationService();
  }

  async updateClassification(
    code: string,
    classification: UpdateClassificationDto,
  ) {
    try {
      const response = await this.classificationService.updateClassification(
        code,
        classification,
      );
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
