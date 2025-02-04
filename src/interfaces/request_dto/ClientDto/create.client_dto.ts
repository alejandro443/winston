import { OmitType } from '@nestjs/swagger';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

  export class CreateClientRequestDto extends
  OmitType(ClientDto, ['code', 'id', 'created_at'] as const) { }