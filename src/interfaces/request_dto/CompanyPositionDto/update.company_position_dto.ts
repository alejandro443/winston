import { OmitType } from '@nestjs/swagger';
import { TypeChannelDto } from '@src/core/shared/dto/TypeChannel/type_channel_dto';

export class UpdateTypeChannelRequestDto extends
  OmitType(TypeChannelDto, ['id', 'created_at'] as const) { }