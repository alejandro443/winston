import { ApiProperty } from '@nestjs/swagger';
import { UbigeoDto } from '@src/core/shared/dto/Ubigeo/ubigeo_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class UbigeosResponse extends AppResponse {
  @ApiProperty({
    type: UbigeoDto,
    nullable: true,
  })
  data?: UbigeoDto[];
}
