import { PickType } from '@nestjs/mapped-types';
import { ClassificationDto } from '@src/core/shared/dto/Classification/classification_dto';

export class GetClassificationRequestDto extends PickType(ClassificationDto, ['code'] as const) { }
