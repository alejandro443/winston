import { ClassificationDto } from "@src/core/shared/dto/Classification/classification_dto";

export type GetClassificationRequestDto = Pick<ClassificationDto, 'code'>;