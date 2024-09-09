import { SupplyTypeApplication } from 'src/core/application/SupplyType/SupplyTypeApplication';
import {
  NewSupplyTypeDto,
  UpdateSupplyTypeDto,
} from 'src/core/shared/dto/SupplyType/supply_type_dto';
import { GetOneSupplyTypeUseCase } from './GetOneSupplyTypeUseCase';
import { GetAllSupplyTypeUseCase } from './GetAllSupplyTypeUseCase';
import { CreateSupplyTypeUseCase } from './CreateSupplyTypeUseCase';
import { UpdateSupplyTypeUseCase } from './UpdateSupplyTypeUseCase';
import { DeleteSupplyTypeUseCase } from './DeleteSupplyTypeUseCase';

export class SupplyTypeApplicationService implements SupplyTypeApplication {
  constructor(
    private getOneUseCase?: GetOneSupplyTypeUseCase,
    private getAllUseCase?: GetAllSupplyTypeUseCase,
    private createUseCase?: CreateSupplyTypeUseCase,
    private updateUseCase?: UpdateSupplyTypeUseCase,
    private deleteUseCase?: DeleteSupplyTypeUseCase,
  ) {
    this.getOneUseCase = new GetOneSupplyTypeUseCase();
    this.getAllUseCase = new GetAllSupplyTypeUseCase();
    this.createUseCase = new CreateSupplyTypeUseCase();
    this.updateUseCase = new UpdateSupplyTypeUseCase();
    this.deleteUseCase = new DeleteSupplyTypeUseCase();
  }

  async getAllSupplyType() {
    try {
      return this.getAllUseCase?.getAllSupplyType();
    } catch (error: any) {
      return error;
    }
  }

  async getOneSupplyType(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneSupplyType(id);
    } catch (error: any) {
      return error;
    }
  }

  async createSupplyType(supply_type: NewSupplyTypeDto): Promise<any> {
    try {
      return this.createUseCase?.createSupplyType(supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async updateSupplyType(
    id: number,
    supply_type: UpdateSupplyTypeDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateSupplyType(id, supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async deleteSupplyType(id: number) {
    try {
      return this.deleteUseCase?.deleteSupplyType(id);
    } catch (error: any) {
      return error;
    }
  }
}
