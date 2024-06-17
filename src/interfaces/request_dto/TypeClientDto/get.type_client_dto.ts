import { PickType } from '@nestjs/swagger';
import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';

export class GetTypeClientRequestDto extends PickType(TypeClientDto, ['code'] as const) { }