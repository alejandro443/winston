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
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
