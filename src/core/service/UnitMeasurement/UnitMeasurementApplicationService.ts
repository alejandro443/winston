import { UnitMeasurementApplication } from 'src/core/application/UnitMeasurement/UnitMeasurementApplication';
import {
  NewUnitMeasurementDto,
  UpdateUnitMeasurementDto,
} from 'src/core/shared/dto/UnitMeasurement/unit_measurement_dto';
import { GetOneUnitMeasurementUseCase } from './GetOneUnitMeasurementUseCase';
import { GetAllUnitMeasurementUseCase } from './GetAllUnitMeasurementUseCase';
import { CreateUnitMeasurementUseCase } from './CreateUnitMeasurementUseCase';
import { UpdateUnitMeasurementUseCase } from './UpdateUnitMeasurementUseCase';
import { DeleteUnitMeasurementUseCase } from './DeleteUnitMeasurementUseCase';

export class UnitMeasurementApplicationService implements UnitMeasurementApplication {
  constructor(
    private getOneUseCase?: GetOneUnitMeasurementUseCase,
    private getAllUseCase?: GetAllUnitMeasurementUseCase,
    private createUseCase?: CreateUnitMeasurementUseCase,
    private updateUseCase?: UpdateUnitMeasurementUseCase,
    private deleteUseCase?: DeleteUnitMeasurementUseCase,
  ) {
    this.getOneUseCase = new GetOneUnitMeasurementUseCase();
    this.getAllUseCase = new GetAllUnitMeasurementUseCase();
    this.createUseCase = new CreateUnitMeasurementUseCase();
    this.updateUseCase = new UpdateUnitMeasurementUseCase();
    this.deleteUseCase = new DeleteUnitMeasurementUseCase();
  }

  async getAllUnitMeasurement() {
    try {
      return this.getAllUseCase?.getAllUnitMeasurement();
    } catch (error: any) {
      return error;
    }
  }

  async getOneUnitMeasurement(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneUnitMeasurement(id);
    } catch (error: any) {
      return error;
    }
  }

  async createUnitMeasurement(unit_measurement: NewUnitMeasurementDto): Promise<any> {
    try {
      return this.createUseCase?.createUnitMeasurement(unit_measurement);
    } catch (error: any) {
      return error;
    }
  }

  async updateUnitMeasurement(
    code: any,
    unit_measurement: UpdateUnitMeasurementDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateUnitMeasurement(code, unit_measurement);
    } catch (error: any) {
      return error;
    }
  }

  async deleteUnitMeasurement(id: number) {
    try {
      return this.deleteUseCase?.deleteUnitMeasurement(id);
    } catch (error: any) {
      return error;
    }
  }
}
