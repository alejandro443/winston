import { OmitType } from '@nestjs/mapped-types';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

  export class CreateClientRequestDto extends
  OmitType(ClientDto, ['id', 'created_at'] as const) { }