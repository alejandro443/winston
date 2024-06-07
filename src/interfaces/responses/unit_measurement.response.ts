import { ApiProperty } from '@nestjs/swagger';
import { UnitMeasurementDto } from '@src/core/shared/dto/UnitMeasurement/unit_measurement_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class UnitMeasurementResponse extends AppResponse {
  @ApiProperty({
    type: UnitMeasurementDto,
    nullable: true,
  })
  data?: object;
}

export class UnitMeasurementsResponse extends AppResponse {
  @ApiProperty({
    type: [UnitMeasurementDto],
    nullable: true,
  })
  data?: UnitMeasurementDto[];
}
