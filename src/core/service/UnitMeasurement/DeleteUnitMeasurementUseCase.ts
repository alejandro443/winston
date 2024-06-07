import { UnitMeasurementService } from 'src/domain/services/UnitMeasurementService/UnitMeasurementService';

export class DeleteUnitMeasurementUseCase {
  constructor(private type_clientService?: UnitMeasurementService) {
    this.type_clientService = new UnitMeasurementService();
  }

  async deleteUnitMeasurement(id: number) {
    try {
      const response: any =
        await this.type_clientService?.deleteUnitMeasurement(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
