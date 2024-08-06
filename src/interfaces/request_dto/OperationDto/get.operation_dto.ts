import { PickType } from '@nestjs/swagger';
import { OperationDto } from '@src/core/shared/dto/Operation/operation_dto';

export class GetOperationRequestDto extends PickType(OperationDto, ['id'] as const) { }