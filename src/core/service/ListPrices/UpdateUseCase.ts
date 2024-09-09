import { UpdateDto } from 'src/core/shared/dto/ListPrice/list_price_dto';
import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';

export class UpdateUseCase {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async updateListPrice(
    id: number,
    point_sale: UpdateDto,
  ) {
    try {
      const response: any =
        await this.service?.update(
          id,
          point_sale,
        );

      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
