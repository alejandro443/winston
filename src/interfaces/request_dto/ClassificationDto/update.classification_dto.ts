import { OmitType } from '@nestjs/mapped-types';
import { ClassificationDto } from '@src/core/shared/dto/Classification/classification_dto';

export class UpdateClassificationRequestDto extends
  OmitType(ClassificationDto, ['id'] as const) { }