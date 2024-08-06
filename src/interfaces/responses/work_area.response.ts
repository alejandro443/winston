import { ApiProperty } from '@nestjs/swagger';
import { WorkAreaDto } from '@src/core/shared/dto/WorkArea/work_area_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class WorkAreaResponse extends AppResponse {
  @ApiProperty({
    type: WorkAreaDto,
    nullable: true,
  })
  data?: object;
}

export class WorkAreasResponse extends AppResponse {
  @ApiProperty({
    type: [WorkAreaDto],
    nullable: true,
  })
  data?: WorkAreaDto[];
}
