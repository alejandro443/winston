import { PointSaleApplication } from 'src/core/application/PointSale/PointSaleApplication';
import {
  NewPointSaleDto,
  UpdatePointSaleDto,
} from 'src/core/shared/dto/PointSale/point_sale_dto';
import { GetOnePointSaleUseCase } from './GetOnePointSaleUseCase';
import { GetAllPointSaleUseCase } from './GetAllPointSaleUseCase';
import { CreatePointSaleUseCase } from './CreatePointSaleUseCase';
import { UpdatePointSaleUseCase } from './UpdatePointSaleUseCase';
import { DeletePointSaleUseCase } from './DeletePointSaleUseCase';

export class PointSaleApplicationService
  implements PointSaleApplication
{
  constructor(
    private getOneUseCase?: GetOnePointSaleUseCase,
    private getAllUseCase?: GetAllPointSaleUseCase,
    private createUseCase?: CreatePointSaleUseCase,
    private updateUseCase?: UpdatePointSaleUseCase,
    private deleteUseCase?: DeletePointSaleUseCase,
  ) {
    this.getOneUseCase = new GetOnePointSaleUseCase();
    this.getAllUseCase = new GetAllPointSaleUseCase();
    this.createUseCase = new CreatePointSaleUseCase();
    this.updateUseCase = new UpdatePointSaleUseCase();
    this.deleteUseCase = new DeletePointSaleUseCase();
  }

  async getAllPointSale() {
    try {
      return this.getAllUseCase?.getAllPointSale();
    } catch (error: any) {
      return error;
    }
  }

  async getOnePointSale(point_sale_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOnePointSale(point_sale_id);
    } catch (error: any) {
      return error;
    }
  }

  async createPointSale(
    point_sale: NewPointSaleDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createPointSale(point_sale);
    } catch (error: any) {
      return error;
    }
  }

  async updatePointSale(
    point_sale_id: number,
    point_sale: UpdatePointSaleDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updatePointSale(point_sale_id, point_sale);
    } catch (error: any) {
      return error;
    }
  }

  async deletePointSale(point_sale_id: number) {
    try {
      return this.deleteUseCase?.deletePointSale(point_sale_id);
    } catch (error: any) {
      return error;
    }
  }
}
