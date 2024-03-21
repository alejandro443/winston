import { ApiProperty } from '@nestjs/swagger';
import { OrganizationDto } from '@src/core/shared/dto/Organization/organization_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class OrganizationResponse extends AppResponse {
  @ApiProperty({
    type: OrganizationDto,
    nullable: true,
  })
  data?: object;
}
