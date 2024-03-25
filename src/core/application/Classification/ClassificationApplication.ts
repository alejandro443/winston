import {
  AllClassificationDto,
  NewClassificationDto,
  OneClassificationDto,
  UpdateClassificationDto,
} from 'src/core/shared/dto/Classification/classification_dto';

export interface ClassificationApplication {
  getAllClassification(): Promise<Array<AllClassificationDto>>;
  getOneClassification(code: any): Promise<OneClassificationDto>;
  createClassification(
    classification: NewClassificationDto,
  ): Promise<OneClassificationDto>;
  updateClassification(
    code: any,
    classification: UpdateClassificationDto,
  ): Promise<OneClassificationDto>;
  deleteClassification(code: any): any;
}
