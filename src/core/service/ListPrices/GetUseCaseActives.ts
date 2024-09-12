import { ListPriceService } from 'src/domain/services/ListPriceService/ListPriceService';

export class GetUseCaseActives {
  constructor(private service?: ListPriceService) {
    this.service = new ListPriceService();
  }

  async getListPriceActives() {
    try {
      const response: any =
        await this.service?.getAllActives();

      return response.map((data: any) => ({
        id: data.dataValues.id,
        code: data.dataValues.code,
        name: data.dataValues.name,
        description: data.dataValues.description,
      }));
    } catch (error: any) {
      return error;
    }
  }
  
  async getListPriceActivesCount() {
    try {
      const response: any = await this.service?.getAllActives();

      return response.length
    } catch (error: any) {
      return error;
    }
  }
}
