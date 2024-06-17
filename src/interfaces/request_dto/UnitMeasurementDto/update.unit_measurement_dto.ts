import { OmitType } from '@nestjs/swagger';
import { UnitMeasurementDto } from '@src/core/shared/dto/UnitMeasurement/unit_measurement_dto';

export class UpdateUnitMeasurementRequestDto extends
  OmitType(UnitMeasurementDto, ['id', 'created_at'] as const) { }