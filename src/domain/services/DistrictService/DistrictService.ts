import { DistrictApplicationError } from '@src/core/shared/error/DistrictApplicationError';
import { NewDistrictDto } from 'src/core/shared/dto/District/district_dto';
import { DistrictRepository } from 'src/domain/repositories/DistrictRepository/DistrictRepository';

export class DistrictService {
  constructor(private repository?: DistrictRepository) {
    this.repository = new DistrictRepository();
  }

  async getAllDistrict() {
    try {
      return this.repository.findAll();
    } catch (error: any) {
      throw new DistrictApplicationError(error.message);
    }
  }

  async getOneDistrict(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error: any) {
      throw new DistrictApplicationError(error.message);
    }
  }

  async createDistrict(district: NewDistrictDto) {
    try {
      return this.repository.create(district);
    } catch (error: any) {
      throw new DistrictApplicationError(error.message);
    }
  }

  async updateDistrict(id: number, district: NewDistrictDto) {
    try {
      return this.repository.update(id, district);
    } catch (error: any) {
      throw new DistrictApplicationError(error.message);
    }
  }

  async deleteDistrict(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error: any) {
      throw new DistrictApplicationError(error.message);
    }
  }
}
