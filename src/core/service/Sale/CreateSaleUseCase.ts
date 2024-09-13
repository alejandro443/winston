import { SaleService } from 'src/domain/services/SaleService/SaleService';
import { NewSaleDto } from 'src/core/shared/dto/Sale/sale_dto';
import { SaleDetailService } from 'src/domain/services/SaleDetailService/SaleDetailService';

export class CreateSaleUseCase {
  constructor(
    private saleService?: SaleService,
    private saleDetailService?: SaleDetailService,
  ) {
    this.saleService = new SaleService();
    this.saleDetailService = new SaleDetailService();
  }

  async createSale(sale: NewSaleDto) {
    try {
      const response: any = await this.saleService?.createSale(sale);

      // TO DO [createSale]: Pasar esta logica de crear detalle de venta, pasarlo al a los servicios del dominio, 
      // usando las transacciones para evitar errores de data huerfana cuando en algun punto de la logica se rompe 
      // y no cumple con su registro

      if(sale.products?.length){
        sale.products.map(async(product) => {
          await this.saleDetailService.createSaleDetail({
            sale_id: response.sale.dataValues.id,
            product_id: product.id,
            amount: product.amount,
            product_name: product.name,
            product_price: product.price,
            product_subtotal: product.subtotal,
            product_discount: product.discount,
            product_total: product.total
          })
        })
      }
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
