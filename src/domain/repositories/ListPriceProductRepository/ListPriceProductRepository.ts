import { ListPrice } from '@src/domain/entities/ListPrice.entity';
import { Product } from '@src/domain/entities/Product.entity';
import { ProductBrand } from '@src/domain/entities/ProductBrand.entity';
import { Op } from 'sequelize';
import {
  NewDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPriceProduct/list_price_product_dto';
import { ListPriceProduct } from 'src/domain/entities/ListPriceProduct.entity';

export class ListPriceProductRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ListPriceProduct.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ListPriceProduct.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewDto) {
    try {
      return ListPriceProduct.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdateDto) {
    try {
      const update_data: any = await ListPriceProduct.update(body, { where: { id: id } });
      return update_data;
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ListPriceProduct.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
  
  async getAllByListPrice(products: Array<number>, list_price_id: number) {
    try {
      var list_price_product: any = await ListPriceProduct.findAll({ 
        attributes: [
          ['id', 'listPriceId'],
          ['unit_price', 'unit_price'],
          ['package_price', 'package_price']
        ],
        include: [
          {
            model: Product, 
            required: true,
            attributes: [
              ['trade_name', 'productTradeName'],
              ['description', 'productDesc'],
              ['sku', 'productSKU'],
              ['image', 'productImage'],
              ['id', 'productId']
            ],
            where: { to_sell: true},
            include: [
              { 
                model: ProductBrand,
                required: false,
                attributes: [
                  ['id', 'brandId'],
                  ['name', 'brandName']
                ]
              }

            ],
          }
        ],
        where: { 
          product_id: { [Op.in]: products },
          list_price_id: list_price_id
        },
        raw: true
      });
      return list_price_product;
    } catch (error: any) {
      return error;
    }
  }
}
