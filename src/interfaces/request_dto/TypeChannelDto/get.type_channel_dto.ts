import { PickType } from '@nestjs/mapped-types';
import { TypeChannelDto } from '@src/core/shared/dto/TypeChannel/type_channel_dto';

export class GetTypeChannelRequestDto extends PickType(TypeChannelDto, ['code'] as const) { }