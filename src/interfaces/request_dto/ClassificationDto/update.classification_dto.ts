import { OmitType } from '@nestjs/swagger';
import { ClassificationDto } from '@src/core/shared/dto/Classification/classification_dto';

export class UpdateClassificationRequestDto extends
  OmitType(ClassificationDto, ['id'] as const) { }