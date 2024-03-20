import { ApiProperty } from '@nestjs/swagger';
import { GroupDto } from '@src/core/shared/dto/Group/group_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class GroupResponse extends AppResponse {
  @ApiProperty({
    type: GroupDto,
    nullable: true,
  })
  data?: object;
}

export class GroupsResponse extends AppResponse {
  @ApiProperty({
    type: [GroupDto],
    nullable: true,
  })
  data?: GroupDto[];
}
