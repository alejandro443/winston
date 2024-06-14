import { SupplyApplication } from 'src/core/application/Supply/SupplyApplication';
import {
  NewSupplyDto,
  UpdateSupplyDto,
} from 'src/core/shared/dto/Supply/supply_dto';
import { GetOneSupplyUseCase } from './GetOneSupplyUseCase';
import { GetAllSupplyUseCase } from './GetAllSupplyUseCase';
import { CreateSupplyUseCase } from './CreateSupplyUseCase';
import { UpdateSupplyUseCase } from './UpdateSupplyUseCase';
import { DeleteSupplyUseCase } from './DeleteSupplyUseCase';

export class SupplyApplicationService implements SupplyApplication {
  constructor(
    private getOneUseCase?: GetOneSupplyUseCase,
    private getAllUseCase?: GetAllSupplyUseCase,
    private createUseCase?: CreateSupplyUseCase,
    private updateUseCase?: UpdateSupplyUseCase,
    private deleteUseCase?: DeleteSupplyUseCase,
  ) {
    this.getOneUseCase = new GetOneSupplyUseCase();
    this.getAllUseCase = new GetAllSupplyUseCase();
    this.createUseCase = new CreateSupplyUseCase();
    this.updateUseCase = new UpdateSupplyUseCase();
    this.deleteUseCase = new DeleteSupplyUseCase();
  }

  async getAllSupply() {
    try {
      return this.getAllUseCase?.getAllSupply();
    } catch (error: any) {
      return error;
    }
  }

  async getOneSupply(supply_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneSupply(supply_id);
    } catch (error: any) {
      return error;
    }
  }

  async createSupply(supply_type: NewSupplyDto): Promise<any> {
    try {
      return this.createUseCase?.createSupply(supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async updateSupply(
    id: any,
    supply_type: UpdateSupplyDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateSupply(id, supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async deleteSupply(supply_id: number) {
    try {
      return this.deleteUseCase?.deleteSupply(supply_id);
    } catch (error: any) {
      return error;
    }
  }
}
