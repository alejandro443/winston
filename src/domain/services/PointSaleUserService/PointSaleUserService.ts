import { NewPointSaleUserDto } from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';
import { PointSaleUserRepository } from 'src/domain/repositories/PointSaleUserRepository/PointSaleUserRepository';

export class PointSaleUserService {
  constructor(private repository?: PointSaleUserRepository) {
    this.repository = new PointSaleUserRepository();
  }

  async ServiceGetOne(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceFindAll() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async ServiceCreate(body: NewPointSaleUserDto) {
    try {
      return this.repository?.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceUpdate(id: number, body: NewPointSaleUserDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async ServiceDelete(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
