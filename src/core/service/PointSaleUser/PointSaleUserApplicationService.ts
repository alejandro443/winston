import { PointSaleUserApplication } from 'src/core/application/PointSaleUser/PointSaleUserApplication';
import {
  NewPointSaleUserDto,
  UpdatePointSaleUserDto,
} from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';
import { GetOneUseCase } from './GetOneUseCase';
import { GetAllUseCase } from './GetAllUseCase';
import { CreateUseCase } from './CreateUseCase';
import { UpdateUseCase } from './UpdateUseCase';
import { DeleteUseCase } from './DeleteUseCase';

export class PointSaleUserApplicationService
  implements PointSaleUserApplication
{
  constructor(
    private getOneUseCase?: GetOneUseCase,
    private getAllUseCase?: GetAllUseCase,
    private createUseCase?: CreateUseCase,
    private updateUseCase?: UpdateUseCase,
    private deleteUseCase?: DeleteUseCase,
  ) {
    this.getOneUseCase = new GetOneUseCase();
    this.getAllUseCase = new GetAllUseCase();
    this.createUseCase = new CreateUseCase();
    this.updateUseCase = new UpdateUseCase();
    this.deleteUseCase = new DeleteUseCase();
  }

  async ServiceGetAll() {
    try {
      return this.getAllUseCase?.getAllPointSaleUser();
    } catch (error: any) {
      return error;
    }
  }

  async ServiceGetOne(point_sale_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOnePointSaleUser(point_sale_id);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceCreate(
    point_sale: NewPointSaleUserDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createPointSaleUser(point_sale);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceUpdate(
    point_sale_id: number,
    point_sale: UpdatePointSaleUserDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updatePointSaleUser(point_sale_id, point_sale);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceDelete(point_sale_id: number) {
    try {
      return this.deleteUseCase?.deletePointSaleUser(point_sale_id);
    } catch (error: any) {
      return error;
    }
  }
}
