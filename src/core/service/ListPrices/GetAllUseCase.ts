import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';

export class GetAllUseCase {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async getAllListPrice() {
    try {
      const response: any =
        await this.service?.getAllListPrice();

      return response.map((data: any) => ({
        id: data.dataValues.id,
        code: data.dataValues.code,
        name: data.dataValues.name,
        description: data.dataValues.description,
        status: data.dataValues.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
