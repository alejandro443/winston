import { WayToPayApplication } from 'src/core/application/WayToPay/WayToPayApplication';
import {
  NewWayToPayDto,
  UpdateWayToPayDto,
} from 'src/core/shared/dto/WayToPay/way_to_pay_dto';
import { GetOneWayToPayUseCase } from './GetOneWayToPayUseCase';
import { GetAllWayToPayUseCase } from './GetAllWayToPayUseCase';
import { CreateWayToPayUseCase } from './CreateWayToPayUseCase';
import { UpdateWayToPayUseCase } from './UpdateWayToPayUseCase';
import { DeleteWayToPayUseCase } from './DeleteWayToPayUseCase';

export class WayToPayApplicationService implements WayToPayApplication {
  constructor(
    private getOneUseCase?: GetOneWayToPayUseCase,
    private getAllUseCase?: GetAllWayToPayUseCase,
    private createUseCase?: CreateWayToPayUseCase,
    private updateUseCase?: UpdateWayToPayUseCase,
    private deleteUseCase?: DeleteWayToPayUseCase,
  ) {
    this.getOneUseCase = new GetOneWayToPayUseCase();
    this.getAllUseCase = new GetAllWayToPayUseCase();
    this.createUseCase = new CreateWayToPayUseCase();
    this.updateUseCase = new UpdateWayToPayUseCase();
    this.deleteUseCase = new DeleteWayToPayUseCase();
  }

  async getAllWayToPay() {
    try {
      return this.getAllUseCase?.getAllWayToPay();
    } catch (error: any) {
      return error;
    }
  }

  async getOneWayToPay(way_to_pay_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneWayToPay(way_to_pay_id);
    } catch (error: any) {
      return error;
    }
  }

  async createWayToPay(way_to_pay: NewWayToPayDto): Promise<any> {
    try {
      return this.createUseCase?.createWayToPay(way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async updateWayToPay(
    id: any,
    way_to_pay: UpdateWayToPayDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateWayToPay(id, way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWayToPay(id: number) {
    try {
      return this.deleteUseCase?.deleteWayToPay(id);
    } catch (error: any) {
      return error;
    }
  }
}
