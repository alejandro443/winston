import { SaleApplication } from 'src/core/application/Sale/SaleApplication';
import {
  NewSaleDto,
  UpdateSaleDto,
} from 'src/core/shared/dto/Sale/sale_dto';
import { GetOneSaleUseCase } from './GetOneSaleUseCase';
import { GetAllSaleUseCase } from './GetAllSaleUseCase';
import { CreateSaleUseCase } from './CreateSaleUseCase';
import { UpdateSaleUseCase } from './UpdateSaleUseCase';
import { DeleteSaleUseCase } from './DeleteSaleUseCase';
import { SaleApplicationError } from '@src/core/shared/error/SaleApplicationError';

export class SaleApplicationService
  implements SaleApplication
{
  constructor(
    private getOneUseCase?: GetOneSaleUseCase,
    private getAllUseCase?: GetAllSaleUseCase,
    private createUseCase?: CreateSaleUseCase,
    private updateUseCase?: UpdateSaleUseCase,
    private deleteUseCase?: DeleteSaleUseCase,
  ) {
    this.getOneUseCase = new GetOneSaleUseCase();
    this.getAllUseCase = new GetAllSaleUseCase();
    this.createUseCase = new CreateSaleUseCase();
    this.updateUseCase = new UpdateSaleUseCase();
    this.deleteUseCase = new DeleteSaleUseCase();
  }

  async getAllSale() {
    try {
      return this.getAllUseCase?.getAllSale();
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async getOneSale(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneSale(id);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async getOneDetails(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneDetails(id);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async createSale(
    body: NewSaleDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createSale(body);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async updateSale(
    id: number,
    body: UpdateSaleDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateSale(id, body);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async deleteSale(id: number) {
    try {
      return this.deleteUseCase?.deleteSale(id);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

  async getAllReceivable(filters: any) {
    try {
      return this.getAllUseCase?.getAllReceivable(filters);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }
  
  async getElectronicReceipts(filters: any) {
    try {
      return this.getAllUseCase?.getElectronicReceipts(filters);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }

}
