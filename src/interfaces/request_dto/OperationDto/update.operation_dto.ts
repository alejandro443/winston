import { OmitType } from '@nestjs/swagger';
import { OperationDto } from '@src/core/shared/dto/Operation/operation_dto';

export class UpdateOperationRequestDto extends
  OmitType(OperationDto, ['id', 'created_at'] as const) { }