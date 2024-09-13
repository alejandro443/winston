import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';

export class GetOneUnitMeasurementUseCase {
  constructor(private classificationService?: UnitMeasurementService) {
    this.classificationService = new UnitMeasurementService();
  }

  async getOneUnitMeasurement(id: number) {
    try {
      const response: any =
        await this.classificationService?.getOneUnitMeasurement(id);
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
