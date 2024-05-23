import { ProvinceApplicationError } from '@src/core/shared/error/ProvinceApplicationError';
import { NewProvinceDto } from 'src/core/shared/dto/Province/province_dto';
import { ProvinceRepository } from 'src/domain/repositories/ProvinceRepository/ProvinceRepository';

export class ProvinceService {
  constructor(private repository?: ProvinceRepository) {
    this.repository = new ProvinceRepository();
  }

  async getAllProvince() {
    try {
      return this.repository.findAll();
    } catch (error: any) {
      throw new ProvinceApplicationError(error.message);
    }
  }

  async getOneProvince(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error: any) {
      throw new ProvinceApplicationError(error.message);
    }
  }

  async createProvince(province: NewProvinceDto) {
    try {
      return this.repository.create(province);
    } catch (error: any) {
      throw new ProvinceApplicationError(error.message);
    }
  }

  async updateProvince(id: number, province: NewProvinceDto) {
    try {
      return this.repository.update(id, province);
    } catch (error: any) {
      throw new ProvinceApplicationError(error.message);
    }
  }

  async deleteProvince(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error: any) {
      throw new ProvinceApplicationError(error.message);
    }
  }
}
