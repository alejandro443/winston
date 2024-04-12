import { ProvinceApplication } from 'src/core/application/Province/ProvinceApplication';
import {
  NewProvinceDto,
  UpdateProvinceDto,
} from 'src/core/shared/dto/Province/province_dto';
import { GetOneProvinceUseCase } from './GetOneProvinceUseCase';
import { GetAllProvinceUseCase } from './GetAllProvinceUseCase';
import { CreateProvinceUseCase } from './CreateProvinceUseCase';
import { UpdateProvinceUseCase } from './UpdateProvinceUseCase';
import { DeleteProvinceUseCase } from './DeleteProvinceUseCase';

export class ProvinceApplicationService implements ProvinceApplication {
  constructor(
    private getAllUseCase?: GetAllProvinceUseCase,
    private getOneUseCase?: GetOneProvinceUseCase,
    private createUseCase?: CreateProvinceUseCase,
    private updateUseCase?: UpdateProvinceUseCase,
    private deleteUseCase?: DeleteProvinceUseCase,
  ) {
    this.getAllUseCase = new GetAllProvinceUseCase();
    this.getOneUseCase = new GetOneProvinceUseCase();
    this.createUseCase = new CreateProvinceUseCase();
    this.updateUseCase = new UpdateProvinceUseCase();
    this.deleteUseCase = new DeleteProvinceUseCase();
  }

  async getAllProvince() {
    try {
      return this.getAllUseCase?.getAllProvince();
    } catch (error: any) {
      return error;
    }
  }

  async getOneProvince(province_id: number) {
    try {
      return this.getOneUseCase?.getOneProvince(province_id);
    } catch (error: any) {
      return error;
    }
  }

  async createProvince(province: NewProvinceDto) {
    try {
      return this.createUseCase?.createProvince(province);
    } catch (error: any) {
      return error;
    }
  }

  async updateProvince(id: number, province: UpdateProvinceDto) {
    try {
      return this.updateUseCase?.updateProvince(id, province);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProvince(id: number) {
    try {
      return this.deleteUseCase?.deleteProvince(id);
    } catch (error: any) {
      return error;
    }
  }
}
