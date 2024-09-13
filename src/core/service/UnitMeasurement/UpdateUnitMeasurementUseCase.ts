import { UpdateUnitMeasurementDto } from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';
import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';

export class UpdateUnitMeasurementUseCase {
  constructor(private unitMeasurementService?: UnitMeasurementService) {
    this.unitMeasurementService = new UnitMeasurementService();
  }

  async updateUnitMeasurement(code: any, unitMeasurement: UpdateUnitMeasurementDto) {
    try {
      const response: any = await this.unitMeasurementService?.updateUnitMeasurement(
        code,
        unitMeasurement,
      );
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
