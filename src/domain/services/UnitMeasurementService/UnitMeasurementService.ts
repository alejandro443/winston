import { NewUnitMeasurementDto } from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';
import { UnitMeasurementRepository } from 'src/domain/repositories/UnitMeasurementRepository/UnitMeasurementRepository';

export class UnitMeasurementService {
  constructor(private repository?: UnitMeasurementRepository) {
    this.repository = new UnitMeasurementRepository();
  }

  async getOneUnitMeasurement(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllUnitMeasurement() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createUnitMeasurement(unit_measurement: NewUnitMeasurementDto) {
    try {
      return this.repository?.create(unit_measurement);
    } catch (error: any) {
      return error;
    }
  }

  async updateUnitMeasurement(id: number, unit_measurement: NewUnitMeasurementDto) {
    try {
      return this.repository?.update(id, unit_measurement);
    } catch (error: any) {
      return error;
    }
  }

  async deleteUnitMeasurement(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
