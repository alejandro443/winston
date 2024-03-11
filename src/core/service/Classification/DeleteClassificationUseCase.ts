import { ClassificationService } from "src/domain/services/ClassificationService/ClassificationService"

export class DeleteClassificationUseCase {

  constructor(
    private classificationService?: ClassificationService
  ) {
    this.classificationService = new ClassificationService()
  }

  async deleteClassification(code: string) {
    try {
      var response = await this.classificationService.deleteClassification(code)
      return { id: response.id }
    } catch (error) {
      return error
    }
  }
}