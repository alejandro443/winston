import {
  NewRegionDto,
  UpdateRegionDto,
} from 'src/core/shared/dto/Region/region_dto';
import { Region } from 'src/domain/entities/Region.entity';

export class RegionRepository {
  constructor() {}

  async findAll() {
    try {
      return Region.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return Region.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async create(region: NewRegionDto) {
    try {
      return Region.create(region);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, region: UpdateRegionDto) {
    try {
      return Region.update(region, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Region.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
