import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';
import { NewUnitMeasurementDto } from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';

export class CreateUnitMeasurementUseCase {
  constructor(private unitMeasurementService?: UnitMeasurementService) {
    this.unitMeasurementService = new UnitMeasurementService();
  }

  async createUnitMeasurement(unitMeasurement: NewUnitMeasurementDto) {
    try {
      const response: any =
        await this.unitMeasurementService?.createUnitMeasurement(unitMeasurement);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        abbreviation: response.abbreviation,
        status: response.status,
        type: response.type,
        convertion_factor: response.convertion_factor
      };
    } catch (error: any) {
      return error;
    }
  }
}
