import { ClassificationService } from "src/domain/services/ClassificationService/ClassificationService"

export class GetAllClassificationUseCase {

  constructor(
    private classificationService?: ClassificationService
  ) {
    this.classificationService = new ClassificationService()
  }

  async getAllClassification() {
    try {
      var response = await this.classificationService.getAllClassification()

      return response.map(classification => ({
        id: classification.id,
        code: classification.code,
        name: classification.name,
        description: classification.description,
        status: classification.status
      }))
    } catch (error) {
      return error
    }
  }
}