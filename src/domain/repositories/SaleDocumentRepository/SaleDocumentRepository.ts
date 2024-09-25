import { SaleApplicationError } from '@src/core/shared/error/SaleApplicationError';
import { SaleDocumentApplicationError } from '@src/core/shared/error/SaleDocumentApplicationError';
import { Client } from '@src/domain/entities/Client.entity';
import { Company } from '@src/domain/entities/Company.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { Product } from '@src/domain/entities/Product.entity';
import { Sale } from '@src/domain/entities/Sale.entity';
import { SaleDetail } from '@src/domain/entities/SaleDetail.entity';
import { SaleDocument } from '@src/domain/entities/SaleDocument.entity';
import { User } from '@src/domain/entities/User.entity';
import { Op } from 'sequelize';

export class SaleDocumentRepository {
  constructor() { }

  async getAll(filters: any) {
    try {
      const whereConditions: any = {
        deleted_at: null
      };

      if (filters?.startDate && filters?.endDate) {
        whereConditions.sale_date = {
          [Op.between]: [filters.startDate, filters.endDate],
        };
      } else if (filters?.startDate) {
        whereConditions.sale_date = { [Op.gte]: filters.startDate };
      } else if (filters?.endDate) {
        whereConditions.sale_date = { [Op.lte]: filters.endDate };
      }

      const data: any = await SaleDocument.findAll({
        include: [
          {
            model: Sale,
            required: true,
            include: [
              {
                model: SaleDetail,
                required: true,
                attributes: ['amount', 'product_price', 'product_subtotal', 'product_discount', 'product_total']
              },
              { 
                model: Client, 
                required: false,
                include: [
                  { 
                    model: Person, 
                    required: false,
                    attributes: ['main_phone', 'name', 'main_identification']
                  },
                  { 
                    model: Company, 
                    required: false,
                    attributes: ['main_phone', 'name', 'main_identification']
                  },
                ],
                attributes: ['type_entity']
              },
              {
                model: User,
                required: true,
                as: 'soldBy',
                attributes: ['user']
              },
              {
                model: User,
                required: true,
                as: 'seller',
                attributes: ['user']
              }
            ],
            attributes: ['currency', 'currency_symbol', 'sale_date', 'type_payment', 'note', 'order_type', 'total_sale'],
            where: whereConditions,
          },
        ],
        attributes: ['issuance_date', 'type_document', 'serie', 'correlative', 'submission_status']
      });
      return data
    } catch (error: any) {
      throw new SaleDocumentApplicationError(error);
    }
  }

  async findOneWithSaleDetails(id: number) {
    try {
      const data: any = await SaleDocument.findAll({
        include: [
          {
            model: Sale,
            required: true,
            include: [
              {
                model: SaleDetail,
                required: true,
                include: [
                  {
                    model: Product,
                    required: true,
                    attributes: ['trade_name']
                  }
                ],
                attributes: ['amount', 'product_price', 'product_subtotal', 'product_discount', 'product_total']
              },
              { 
                model: Client, 
                required: false,
                include: [
                  { 
                    model: Person, 
                    required: false,
                    attributes: ['main_phone', 'name']
                  },
                  { 
                    model: Company, 
                    required: false,
                    attributes: ['main_phone', 'name']
                  },
                ],
                attributes: ['type_entity']
              },
              {
                model: User,
                required: true,
                as: 'soldBy',
                attributes: ['user']
              },
              {
                model: User,
                required: true,
                as: 'seller',
                attributes: ['user']
              }
            ],
            attributes: ['currency', 'currency_symbol', 'sale_date', 'type_payment', 'note', 'order_type']
          },
        ],
        where: { sale_id: id },
        attributes: ['type_document', 'serie', 'correlative', 'submission_status']
      })

      return data;
    } catch (error: any) {
      console.log(error)
      throw new SaleApplicationError(error);
    }
  }
}
