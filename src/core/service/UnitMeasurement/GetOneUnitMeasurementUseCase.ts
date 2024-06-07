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
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
