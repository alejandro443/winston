import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';

export class GetAllUnitMeasurementUseCase {
  constructor(private unitMeasurementService?: UnitMeasurementService) {
    this.unitMeasurementService = new UnitMeasurementService();
  }

  async getAllUnitMeasurement() {
    try {
      const response: any = await this.unitMeasurementService?.getAllUnitMeasurement();

      return response.map((unitMeasurement: any) => ({
        id: response.id,
        code: response.code,
        name: response.name,
        abbreviation: response.abbreviation,
        status: response.status,
        type: response.type,
        convertion_factor: response.convertion_factor
      }));
    } catch (error: any) {
      return error;
    }
  }
}
