import { OmitType } from '@nestjs/swagger';
import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export class CreateTypeClientRequestDto extends
  OmitType(TypeClientDto, ['id', 'created_at'] as const) { }