import { PaymentScheduleApplicationError } from '@src/core/shared/error/PaymentScheduleApplicationError';
import { Client } from '@src/domain/entities/Client.entity';
import { Company } from '@src/domain/entities/Company.entity';
import { PaymentSchedule } from '@src/domain/entities/PaymentSchedule.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { Sale } from '@src/domain/entities/Sale.entity';
import { SalePaymentSchedule } from '@src/domain/entities/SalePaymentSchedule.entity';
import { User } from '@src/domain/entities/User.entity';

export class PaymentScheduleRepository {
  constructor() {}

  async findAll(sale_id: number | string) {
    console.log(sale_id)
    try {
      const data: any = await SalePaymentSchedule.findAll({
        include: [
          { 
            model: Sale, 
            required: true,
            include: [
              { 
                model: User, 
                required: false, 
                as: 'seller',
                attributes: ['user']
              },
              { 
                model: Client, 
                required: false, 
                attributes: ['type_entity'],
                include: [
                  { model: Person, required: false, attributes: ['name'] },
                  { model: Company, required: false, attributes: ['name'] },
                ]
              }
            ]
          },
          { 
            model: PaymentSchedule, 
            required: true,
            attributes: ['id', 'uuid', 'number_quota', 'payment_date', 'done', 'amount']
          }
        ],
        where: {
          sale_id: sale_id,
          deleted_at: null
        } 
      });
      return data;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }
}
