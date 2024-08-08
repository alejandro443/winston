import { ProductCategoryApplication } from 'src/core/application/ProductCategory/ProductCategoryApplication';
import {
  NewProductCategoryDto,
  UpdateProductCategoryDto,
} from 'src/core/shared/dto/ProductCategory/product_category_dto';
import { GetOneProductCategoryUseCase } from './GetOneProductCategoryUseCase';
import { GetAllProductCategoryUseCase } from './GetAllProductCategoryUseCase';
import { CreateProductCategoryUseCase } from './CreateProductCategoryUseCase';
import { UpdateProductCategoryUseCase } from './UpdateProductCategoryUseCase';
import { DeleteProductCategoryUseCase } from './DeleteProductCategoryUseCase';
import { GetFathersProductCategoryUseCase } from './GetFathersProductCategoryUseCase';

export class ProductCategoryApplicationService
  implements ProductCategoryApplication
{
  constructor(
    private getOneUseCase?: GetOneProductCategoryUseCase,
    private getAllUseCase?: GetAllProductCategoryUseCase,
    private getFathersUseCase?: GetFathersProductCategoryUseCase,
    private createUseCase?: CreateProductCategoryUseCase,
    private updateUseCase?: UpdateProductCategoryUseCase,
    private deleteUseCase?: DeleteProductCategoryUseCase,
  ) {
    this.getOneUseCase = new GetOneProductCategoryUseCase();
    this.getAllUseCase = new GetAllProductCategoryUseCase();
    this.getFathersUseCase = new GetFathersProductCategoryUseCase();
    this.createUseCase = new CreateProductCategoryUseCase();
    this.updateUseCase = new UpdateProductCategoryUseCase();
    this.deleteUseCase = new DeleteProductCategoryUseCase();
  }

  async getAllProductCategory() {
    try {
      return this.getAllUseCase?.getAllProductCategory();
    } catch (error: any) {
      return error;
    }
  }
 
  async getFathersProductCategory() {
    try {
      return this.getFathersUseCase?.getFathersProductCategory();
    } catch (error: any) {
      return error;
    }
  }

  async getOneProductCategory(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneProductCategory(id);
    } catch (error: any) {
      return error;
    }
  }

  async createProductCategory(
    product_category: NewProductCategoryDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createProductCategory(product_category);
    } catch (error: any) {
      return error;
    }
  }

  async updateProductCategory(
    id: number,
    product_category: UpdateProductCategoryDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateProductCategory(id, product_category);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProductCategory(id: number) {
    try {
      return this.deleteUseCase?.deleteProductCategory(id);
    } catch (error: any) {
      return error;
    }
  }
}
