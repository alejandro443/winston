import {
  NewDistrictDto,
  UpdateDistrictDto,
} from 'src/core/shared/dto/District/district_dto';
import { District } from 'src/domain/entities/District.entity';

export class DistrictRepository {
  constructor() {}

  async findAll() {
    try {
      return District.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return District.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async create(district: NewDistrictDto) {
    try {
      return District.create(district);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, district: UpdateDistrictDto) {
    try {
      return District.update(district, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return District.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
