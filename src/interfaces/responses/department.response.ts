import { ApiProperty } from '@nestjs/swagger';
import { DepartmentDto } from '@src/core/shared/dto/Department/department_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class DepartmentResponse extends AppResponse {
  @ApiProperty({
    type: DepartmentDto,
    nullable: true,
  })
  data?: object;
}

export class DepartmentsResponse extends AppResponse {
  @ApiProperty({
    type: [DepartmentDto],
    nullable: true,
  })
  data?: DepartmentDto[];
}
