import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { GenerateCodeProduct, GenerateRandomCodeProduct } from '@src/core/shared/functions/generate_code_product.function';
import { NewProductDto } from 'src/core/shared/dto/Product/product_dto';
import { ProductRepository } from 'src/domain/repositories/ProductRepository/ProductRepository';

export class ProductService {
  constructor(private repository?: ProductRepository) {
    this.repository = new ProductRepository();
  }

  async getOneProduct(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error)
    }
  }

  async getAllProduct() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error)
    }
  }

  async createProduct(product: NewProductDto) {
    try {
      product.code = product.code
        ? await GenerateCodeProduct(product.code)
        : await GenerateRandomCodeProduct();

      const product_new: any = this.repository?.create(product);
      return product_new;
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error)
    }
  }

  async updateProduct(id: any, product: NewProductDto) {
    try {
      const product_update: any = await this.repository?.update(id, product);
      return product_update;
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error)
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new ProductApplicationError(error)
    }
  }
  
  async findAllByCategories(product_category_id: number) {
    try {
      return this.repository?.findAllByCategories(product_category_id);
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error)
    }
  }

  async getOneProductWithPriceList(id: number) {
    try {
      const data: any = await this.repository?.findOneWithPriceLists(id);

      if(!data.length){throw new ProductApplicationError('No encontrado.', 'NOT_FOUND')}

      const result = data.reduce((acc, item) => {
        const existingProduct = acc.find(p => p.id === item.product.id);
        if (existingProduct) {
          existingProduct.list_prices.push({
            reference_update_id: item.id,
            list_price_id: item.listPrice.id,
            name: item.listPrice.name,
            unit_price: parseFloat(item.unit_price),
            package_price: parseFloat(item.package_price)
          });
        } else {
          acc.push({
            id: item.product.id,
            code: item.product.code,
            name: item.product.name,
            tradename: item.product.tradename,
            description: item.product.description,
            image: item.product.image,
            sku: item.product.sku,
            upc: item.product.upc,
            weight: item.product.weight,
            height: item.product.height,
            depth: item.product.depth,
            status: item.product.status,
            to_sell: item.product.to_sell,
            to_buy: item.product.to_buy,
            alert_days: item.product.alert_days,
            tracing: item.product.tracing,
            product_brand_id: item.product.product_brand_id,
            product_category_id: item.product.product_category_id,
            unit_measurement_id: item.product.unit_measurement_id,
            list_prices: [{
              reference_update_id: item.id,
              list_price_id: item.listPrice.id,
              name: item.listPrice.name,
              unit_price: parseFloat(item.unit_price),
              package_price: parseFloat(item.package_price)
            }]
          });
        }
      
        return acc;
      }, []);

      return {...result[0]};
    } catch (error: any) {
      console.log(error)
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }
}
