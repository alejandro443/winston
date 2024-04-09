import { ProductApplication } from 'src/core/application/Product/ProductApplication';
import {
  NewProductDto,
  UpdateProductDto,
} from 'src/core/shared/dto/Product/product_dto';
import { GetOneProductUseCase } from './GetOneProductUseCase';
import { GetAllProductUseCase } from './GetAllProductUseCase';
import { CreateProductUseCase } from './CreateProductUseCase';
import { UpdateProductUseCase } from './UpdateProductUseCase';
import { DeleteProductUseCase } from './DeleteProductUseCase';

export class ProductApplicationService
  implements ProductApplication
{
  constructor(
    private getOneUseCase?: GetOneProductUseCase,
    private getAllUseCase?: GetAllProductUseCase,
    private createUseCase?: CreateProductUseCase,
    private updateUseCase?: UpdateProductUseCase,
    private deleteUseCase?: DeleteProductUseCase,
  ) {
    this.getOneUseCase = new GetOneProductUseCase();
    this.getAllUseCase = new GetAllProductUseCase();
    this.createUseCase = new CreateProductUseCase();
    this.updateUseCase = new UpdateProductUseCase();
    this.deleteUseCase = new DeleteProductUseCase();
  }

  async getAllProduct() {
    try {
      return this.getAllUseCase?.getAllProduct();
    } catch (error: any) {
      return error;
    }
  }

  async getOneProduct(id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneProduct(id);
    } catch (error: any) {
      return error;
    }
  }

  async createProduct(
    product: NewProductDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createProduct(product);
    } catch (error: any) {
      return error;
    }
  }

  async updateProduct(
    id: number,
    product: UpdateProductDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateProduct(id, product);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.deleteUseCase?.deleteProduct(id);
    } catch (error: any) {
      return error;
    }
  }
}
