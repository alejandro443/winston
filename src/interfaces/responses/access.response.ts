import { ApiProperty } from '@nestjs/swagger';
import { AccessDto } from '@src/core/shared/dto/Access/access_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class AccessResponse extends AppResponse {
  @ApiProperty({
    type: AccessDto,
    nullable: true,
  })
  data?: object;
}

export class AccessesResponse extends AppResponse {
  @ApiProperty({
    type: [AccessDto],
    nullable: true,
  })
  data?: AccessDto[];
}
