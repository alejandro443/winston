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
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
