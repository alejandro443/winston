import {
  AllSaleDto,
  NewSaleDto,
  OneSaleDto,
  UpdateSaleDto,
} from 'src/core/shared/dto/Sale/sale_dto';

export interface SaleApplication {
  getAllSale(): Promise<Array<AllSaleDto>>;
  getOneSale(id: number): Promise<OneSaleDto>;
  createSale(body: NewSaleDto ): Promise<OneSaleDto>;
  updateSale(
    id: number,
    body: UpdateSaleDto,
  ): Promise<OneSaleDto>;
  deleteSale(id: any): any;

  getAllReceivable(filters: any): Promise<Array<AllSaleDto>>;
  getOneDetails(sale_id: number): Promise<any>;
  getElectronicReceipts(filters: any): Promise<any>;

}
