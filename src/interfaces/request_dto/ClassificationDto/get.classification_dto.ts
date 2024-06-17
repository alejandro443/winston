import { PickType } from '@nestjs/swagger';
import { ClassificationDto } from '@src/core/shared/dto/Classification/classification_dto';

export class GetClassificationRequestDto extends PickType(ClassificationDto, ['code'] as const) { }
