import {
  NewProductBrandDto,
  UpdateProductBrandDto,
} from 'src/core/shared/dto/ProductBrand/product_brand_dto';
import { ProductBrand } from 'src/domain/entities/ProductBrand.entity';

export class ProductBrandRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ProductBrand.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ProductBrand.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(product_brand: NewProductBrandDto) {
    try {
      return ProductBrand.create(product_brand);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, product_brand: UpdateProductBrandDto) {
    try {
      return ProductBrand.update(product_brand, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ProductBrand.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
