import { PaymentScheduleApplicationError } from '@src/core/shared/error/PaymentScheduleApplicationError';
import { PaymentSchedule } from '@src/domain/entities/PaymentSchedule.entity';
import { QuotaPayment } from '@src/domain/entities/QuotaPayment.entity';
import { SalePaymentSchedule } from '@src/domain/entities/SalePaymentSchedule.entity';
import { sequelize } from '@src/infraestructure/database/connection.database';

export class QuotaPaymentRepository {
  constructor() {}

  async findAll(payment_schedule_id: number | string) {
    try {
      const data: any = await QuotaPayment.findAll({
        where: {
          payment_schedule_id: payment_schedule_id,
          deleted_at: null
        } 
      });
      return data;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }

  async createOne(body: any) {
    const transaction = await QuotaPayment.sequelize.transaction(); 
    try {
      const quota_payment = await QuotaPayment.create(body,{ transaction });
      const [rowsUpdated, [updateData]] = await PaymentSchedule.update(
        // { 
        //   amount: sequelize.literal(`amount + ${body.amount}`),
        //   residue: sequelize.literal(`payment_amount - (amount + ${body.amount})`),
        //   done: sequelize.literal(`CASE WHEN (payment_amount - (amount + ${body.amount})) = 0 THEN true ELSE false END`)
        // }, 
        { 
          amount: sequelize.literal(`amount + ${body.amount}`),
          residue: sequelize.literal(`payment_amount - (amount + ${body.amount})`),
          done: sequelize.literal(`CASE WHEN (payment_amount - (amount + ${body.amount})) = 0 THEN true ELSE false END`)
        }, 
        { 
          where: { id: quota_payment.payment_schedule_id }, 
          transaction,
          returning: true
        }
      );

      await SalePaymentSchedule.update(
        { 
          total_payments: sequelize.literal(`total_payments + ${body.amount}`)
        }, 
        { where: { id: updateData.sale_payment_schedule_id }, transaction}
      );

      // Confirmar la transacción
      await transaction.commit();
      
      return quota_payment;
    } catch (error: any) {
      // Rollback en caso de error
      console.log(error)
      await transaction.rollback();
      throw new PaymentScheduleApplicationError(error);
    }
  }
}
