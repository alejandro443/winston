import { OmitType } from '@nestjs/mapped-types';
import { UnitMeasurementDto } from '@src/core/shared/dto/UnitMeasurement/unit_measurement_dto';

export class UpdateUnitMeasurementRequestDto extends
  OmitType(UnitMeasurementDto, ['id', 'created_at'] as const) { }