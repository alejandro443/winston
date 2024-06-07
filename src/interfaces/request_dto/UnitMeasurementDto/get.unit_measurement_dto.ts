import { PickType } from '@nestjs/mapped-types';
import { UnitMeasurementDto } from '@src/core/shared/dto/UnitMeasurement/unit_measurement_dto';

export class GetUnitMeasurementRequestDto extends PickType(UnitMeasurementDto, ['id'] as const) { }
