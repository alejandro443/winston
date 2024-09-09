import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';

export class GetOneUseCase {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async getOneListPrice(id: number) {
    try {
      const response: any =
        await this.service?.getOne(id);
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
