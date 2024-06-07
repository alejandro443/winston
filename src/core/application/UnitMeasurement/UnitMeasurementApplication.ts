import {
  AllUnitMeasurementDto,
  NewUnitMeasurementDto,
  OneUnitMeasurementDto,
  UpdateUnitMeasurementDto,
} from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';

export interface UnitMeasurementApplication {
  getAllUnitMeasurement(): Promise<Array<AllUnitMeasurementDto>>;
  getOneUnitMeasurement(code: any): Promise<OneUnitMeasurementDto>;
  createUnitMeasurement(
    unit_measurement: NewUnitMeasurementDto,
  ): Promise<OneUnitMeasurementDto>;
  updateUnitMeasurement(
    code: any,
    unit_measurement: UpdateUnitMeasurementDto,
  ): Promise<OneUnitMeasurementDto>;
  deleteUnitMeasurement(code: any): any;
}
