import { OmitType } from '@nestjs/mapped-types';
import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export class UpdateTypeClientRequestDto extends
  OmitType(TypeClientDto, ['id', 'created_at'] as const) { }