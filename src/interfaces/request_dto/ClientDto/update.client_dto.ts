import { OmitType, PickType } from '@nestjs/swagger';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

export class UpdateClientRequestDto extends PickType(ClientDto, ['id'] as const) { }
