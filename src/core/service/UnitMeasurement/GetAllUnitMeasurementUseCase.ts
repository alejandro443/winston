import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';

export class GetAllUnitMeasurementUseCase {
  constructor(private unitMeasurementService?: UnitMeasurementService) {
    this.unitMeasurementService = new UnitMeasurementService();
  }

  async getAllUnitMeasurement() {
    try {
      const response: any = await this.unitMeasurementService?.getAllUnitMeasurement();

      return response.map((unitMeasurement: any) => ({
        id: unitMeasurement.id,
        code: unitMeasurement.code,
        name: unitMeasurement.name,
        abbreviation: unitMeasurement.abbreviation,
        status: unitMeasurement.status,
        type: unitMeasurement.type,
        convertion_factor: unitMeasurement.convertion_factor
      }));
    } catch (error: any) {
      return error;
    }
  }
}
