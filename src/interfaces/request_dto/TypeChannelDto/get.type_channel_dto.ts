import { PickType } from '@nestjs/swagger';
import { TypeChannelDto } from '@src/core/shared/dto/TypeChannel/type_channel_dto';

export class GetTypeChannelRequestDto extends PickType(TypeChannelDto, ['id'] as const) { }