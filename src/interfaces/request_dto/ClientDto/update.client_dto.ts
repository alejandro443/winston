import { OmitType } from '@nestjs/swagger';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

export class UpdateClientRequestDto extends
  OmitType(ClientDto, ['code'] as const) { }