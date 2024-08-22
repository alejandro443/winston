import { BusinessSubcategoryApplication } from 'src/core/application/BusinessSubcategory/BusinessSubcategoryApplication';
import {
  NewBusinessSubcategoryDto,
  UpdateBusinessSubcategoryDto,
} from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';
import { GetOneBusinessSubcategoryUseCase } from './GetOneBusinessSubcategoryUseCase';
import { GetAllBusinessSubcategoryUseCase } from './GetAllBusinessSubcategoryUseCase';
import { CreateBusinessSubcategoryUseCase } from './CreateBusinessSubcategoryUseCase';
import { UpdateBusinessSubcategoryUseCase } from './UpdateBusinessSubcategoryUseCase';
import { DeleteBusinessSubcategoryUseCase } from './DeleteBusinessSubcategoryUseCase';

export class BusinessSubcategoryApplicationService
  implements BusinessSubcategoryApplication
{
  constructor(
    private getOneUseCase?: GetOneBusinessSubcategoryUseCase,
    private getAllUseCase?: GetAllBusinessSubcategoryUseCase,
    private createUseCase?: CreateBusinessSubcategoryUseCase,
    private updateUseCase?: UpdateBusinessSubcategoryUseCase,
    private deleteUseCase?: DeleteBusinessSubcategoryUseCase,
  ) {
    this.getOneUseCase = new GetOneBusinessSubcategoryUseCase();
    this.getAllUseCase = new GetAllBusinessSubcategoryUseCase();
    this.createUseCase = new CreateBusinessSubcategoryUseCase();
    this.updateUseCase = new UpdateBusinessSubcategoryUseCase();
    this.deleteUseCase = new DeleteBusinessSubcategoryUseCase();
  }

  async getAllBusinessSubcategory() {
    try {
      return this.getAllUseCase?.getAllBusinessSubcategory();
    } catch (error: any) {
      return error;
    }
  }

  async getOneBusinessSubcategory(id_business_subcategory: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneBusinessSubcategory(id_business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async createBusinessSubcategory(
    business_subcategory: NewBusinessSubcategoryDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createBusinessSubcategory(business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async updateBusinessSubcategory(
    id_business_subcategory: number,
    business_subcategory: UpdateBusinessSubcategoryDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateBusinessSubcategory(id_business_subcategory, business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async deleteBusinessSubcategory(id_business_subcategory: number) {
    try {
      return this.deleteUseCase?.deleteBusinessSubcategory(id_business_subcategory);
    } catch (error: any) {
      return error;
    }
  }
}
