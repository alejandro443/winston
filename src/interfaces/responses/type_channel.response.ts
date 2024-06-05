import { ApiProperty } from '@nestjs/swagger';
import { TypeChannelDto } from '@src/core/shared/dto/TypeChannel/type_channel_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class TypeChannelResponse extends AppResponse {
  @ApiProperty({
    type: TypeChannelDto,
    nullable: true,
  })
  data?: object;
}

export class TypesChannelsResponse extends AppResponse {
  @ApiProperty({
    type: [TypeChannelDto],
    nullable: true,
  })
  data?: TypeChannelDto[];
}
