import {
  NewProvinceDto,
  UpdateProvinceDto,
} from 'src/core/shared/dto/Province/province_dto';
import { Province } from 'src/domain/entities/Province.entity';

export class ProvinceRepository {
  constructor() {}

  async findAll() {
    try {
      return Province.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return Province.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async create(province: NewProvinceDto) {
    try {
      return Province.create(province);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, province: UpdateProvinceDto) {
    try {
      return Province.update(province, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Province.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
