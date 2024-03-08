import { AllClassificationDto, NewClassificationDto, OneClassificationDto, UpdateClassificationDto } from "src/core/shared/dto/Classification/classification_dto";

export interface ClassificationApplication {
  getAllClassification(): Promise<Array<AllClassificationDto>>
  getOneClassification(code: String): Promise<OneClassificationDto>
  createClassification(access: NewClassificationDto): Promise<OneClassificationDto>
  updateClassification(access: UpdateClassificationDto): Promise<OneClassificationDto>
  deleteClassification(code: String)
}