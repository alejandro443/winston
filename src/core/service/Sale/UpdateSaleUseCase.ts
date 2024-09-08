import { UpdateSaleDto } from 'src/core/shared/dto/Sale/sale_dto';
import { SaleService } from 'src/domain/services/SaleService/SaleService';

export class UpdateSaleUseCase {
  constructor(private saleService?: SaleService) {
    this.saleService = new SaleService();
  }

  async updateSale(
    id: any,
    sale: UpdateSaleDto,
  ) {
    try {
      const response: any =
        await this.saleService?.updateSale(
          id,
          sale,
        );
      return {
        id: response.id
      };
    } catch (error: any) {
      return error;
    }
  }
}
