import {
  AllClassificationDto,
  NewClassificationDto,
  OneClassificationDto,
  UpdateClassificationDto,
} from 'src/core/shared/dto/Classification/classification_dto';

export interface ClassificationApplication {
  getAllClassification(): Promise<Array<AllClassificationDto>>;
  getOneClassification(code: string): Promise<OneClassificationDto>;
  createClassification(
    classification: NewClassificationDto,
  ): Promise<OneClassificationDto>;
  updateClassification(
    code: string,
    classification: UpdateClassificationDto,
  ): Promise<OneClassificationDto>;
  deleteClassification(code: string);
}
