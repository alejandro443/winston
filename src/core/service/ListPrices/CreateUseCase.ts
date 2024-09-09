import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';
import { NewDto } from 'src/core/shared/dto/ListPrice/list_price_dto';

export class CreateUseCase {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async createListPrice(body: NewDto) {
    try {
      const response: any =
        await this.service?.createListPrice(body);
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
