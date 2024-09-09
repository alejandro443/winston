import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';

export class DeleteUseCase {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async deleteListPrice(id: number) {
    try {
      const response: any =
        await this.service?.deleteListPrice(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
