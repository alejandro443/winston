import {
  NewUnitMeasurementDto,
  UpdateUnitMeasurementDto,
} from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';
import { UnitMeasurement } from 'src/domain/entities/UnitMeasurement.entity';

export class UnitMeasurementRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return UnitMeasurement.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return UnitMeasurement.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(unit_measurement: any) {
    try {
      return UnitMeasurement.create(unit_measurement);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, unit_measurement: any) {
    try {
      return UnitMeasurement.update(unit_measurement, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return UnitMeasurement.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
