import {
  NewDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPrice/list_price_dto';
import { ListPrice } from 'src/domain/entities/ListPrice.entity';

export class ListPriceRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ListPrice.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ListPrice.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewDto) {
    try {
      return ListPrice.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdateDto) {
    try {
      return ListPrice.update(body, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ListPrice.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAllActives() {
    try {
      return ListPrice.findAll({ where: { status: true, deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }
}
