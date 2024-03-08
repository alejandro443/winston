import { AllClassificationDto, NewClassificationDto, OneClassificationDto, UpdateClassificationDto } from "src/core/shared/dto/Classification/classification_dto";

export interface ClasificationApplication {
  getAllClasification(): Promise<Array<AllClassificationDto>>
  getOneClasification(code: String): Promise<OneClassificationDto>
  createClasification(access: NewClassificationDto): Promise<OneClassificationDto>
  updateClasification(access: UpdateClassificationDto): Promise<OneClassificationDto>
  deleteClasification(code: String): Promise<number>
}