import { DistrictApplication } from 'src/core/application/District/DistrictApplication';
import {
  NewDistrictDto,
  UpdateDistrictDto,
} from 'src/core/shared/dto/District/district_dto';
import { GetOneDistrictUseCase } from './GetOneDistrictUseCase';
import { GetAllDistrictUseCase } from './GetAllDistrictUseCase';
import { CreateDistrictUseCase } from './CreateDistrictUseCase';
import { UpdateDistrictUseCase } from './UpdateDistrictUseCase';
import { DeleteDistrictUseCase } from './DeleteDistrictUseCase';

export class DistrictApplicationService implements DistrictApplication {
  constructor(
    private getAllUseCase?: GetAllDistrictUseCase,
    private getOneUseCase?: GetOneDistrictUseCase,
    private createUseCase?: CreateDistrictUseCase,
    private updateUseCase?: UpdateDistrictUseCase,
    private deleteUseCase?: DeleteDistrictUseCase,
  ) {
    this.getAllUseCase = new GetAllDistrictUseCase();
    this.getOneUseCase = new GetOneDistrictUseCase();
    this.createUseCase = new CreateDistrictUseCase();
    this.updateUseCase = new UpdateDistrictUseCase();
    this.deleteUseCase = new DeleteDistrictUseCase();
  }

  async getAllDistrict() {
    try {
      return this.getAllUseCase?.getAllDistrict();
    } catch (error: any) {
      return error;
    }
  }

  async getOneDistrict(district_id: number) {
    try {
      return this.getOneUseCase?.getOneDistrict(district_id);
    } catch (error: any) {
      return error;
    }
  }

  async createDistrict(district: NewDistrictDto) {
    try {
      return this.createUseCase?.createDistrict(district);
    } catch (error: any) {
      return error;
    }
  }

  async updateDistrict(id: number, district: UpdateDistrictDto) {
    try {
      return this.updateUseCase?.updateDistrict(id, district);
    } catch (error: any) {
      return error;
    }
  }

  async deleteDistrict(id: number) {
    try {
      return this.deleteUseCase?.deleteDistrict(id);
    } catch (error: any) {
      return error;
    }
  }
}
