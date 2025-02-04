import { SaleApplicationError } from '@src/core/shared/error/SaleApplicationError';
import { SaleDocumentRepository } from '@src/domain/repositories/SaleDocumentRepository/SaleDocumentRepository';
import { NewSaleDto } from 'src/core/shared/dto/Sale/sale_dto';
import { SaleRepository } from 'src/domain/repositories/SaleRepository/SaleRepository';

export class SaleService {
  constructor(
    private repository?: SaleRepository,
    private repositorySaleDocument?: SaleDocumentRepository
  ) {
    this.repository = new SaleRepository();
    this.repositorySaleDocument = new SaleDocumentRepository();
  }

  async getOneSale(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async getAllSale() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async createSale(body: NewSaleDto) {
    try {
      return await this.repository?.create(body);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async updateSale(id: number, body: NewSaleDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async deleteSale(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async getAllReceivable(filters: object) {
    try {
      return this.repository?.getAllReceivable(filters);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }
  
  async getOneDetailSale(id: number) {
    try {
      return this.repositorySaleDocument?.findOneWithSaleDetails(id);
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }
  
  async getElectronicReceipts(filters: object) {
    try {
      return this.repositorySaleDocument?.getAll(filters);
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

}
