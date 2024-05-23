import { ProductBrandApplication } from 'src/core/application/ProductBrand/ProductBrandApplication';
import {
  NewProductBrandDto,
  UpdateProductBrandDto,
} from 'src/core/shared/dto/ProductBrand/product_brand_dto';
import { GetOneProductBrandUseCase } from './GetOneProductBrandUseCase';
import { GetAllProductBrandUseCase } from './GetAllProductBrandUseCase';
import { CreateProductBrandUseCase } from './CreateProductBrandUseCase';
import { UpdateProductBrandUseCase } from './UpdateProductBrandUseCase';
import { DeleteProductBrandUseCase } from './DeleteProductBrandUseCase';

export class ProductBrandApplicationService implements ProductBrandApplication {
  constructor(
    private getOneUseCase?: GetOneProductBrandUseCase,
    private getAllUseCase?: GetAllProductBrandUseCase,
    private createUseCase?: CreateProductBrandUseCase,
    private updateUseCase?: UpdateProductBrandUseCase,
    private deleteUseCase?: DeleteProductBrandUseCase,
  ) {
    this.getOneUseCase = new GetOneProductBrandUseCase();
    this.getAllUseCase = new GetAllProductBrandUseCase();
    this.createUseCase = new CreateProductBrandUseCase();
    this.updateUseCase = new UpdateProductBrandUseCase();
    this.deleteUseCase = new DeleteProductBrandUseCase();
  }

  async getAllProductBrand() {
    try {
      return this.getAllUseCase?.getAllProductBrand();
    } catch (error: any) {
      return error;
    }
  }

  async getOneProductBrand(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneProductBrand(id);
    } catch (error: any) {
      return error;
    }
  }

  async createProductBrand(product_brand: NewProductBrandDto): Promise<any> {
    try {
      return this.createUseCase?.createProductBrand(product_brand);
    } catch (error: any) {
      return error;
    }
  }

  async updateProductBrand(
    id: number,
    product_brand: UpdateProductBrandDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateProductBrand(id, product_brand);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProductBrand(id: number) {
    try {
      return this.deleteUseCase?.deleteProductBrand(id);
    } catch (error: any) {
      return error;
    }
  }
}
