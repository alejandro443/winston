import { OmitType } from '@nestjs/swagger';
import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export class UpdateTypeClientRequestDto extends
  OmitType(TypeClientDto, ['code', 'created_at'] as const) { }