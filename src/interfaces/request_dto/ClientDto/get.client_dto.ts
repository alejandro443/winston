import { PickType } from '@nestjs/mapped-types';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';

export class GetClientRequestDto extends PickType(ClientDto, ['code'] as const) { }
