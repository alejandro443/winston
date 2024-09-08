import {
  NewSaleDto,
  UpdateSaleDto,
} from 'src/core/shared/dto/Sale/sale_dto';
import { Sale } from 'src/domain/entities/Sale.entity';

export class SaleRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Sale.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Sale.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewSaleDto) {
    return await Sale.create(body);
  }

  async update(id: number, body: UpdateSaleDto) {
    try {
      return Sale.update(body, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Sale.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
