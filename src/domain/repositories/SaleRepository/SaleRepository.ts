import { SaleApplicationError } from '@src/core/shared/error/SaleApplicationError';
import { Client } from '@src/domain/entities/Client.entity';
import { Company } from '@src/domain/entities/Company.entity';
import { FinancialSequence } from '@src/domain/entities/FinancialSequence.entity';
import { IssuableDocument } from '@src/domain/entities/IssuableDocument.entity';
import { PaymentSchedule } from '@src/domain/entities/PaymentSchedule.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { SaleDocument } from '@src/domain/entities/SaleDocument.entity';
import { SalePaymentSchedule } from '@src/domain/entities/SalePaymentSchedule.entity';
import { SalesPayment } from '@src/domain/entities/SalesPayment.entity';
import { User } from '@src/domain/entities/User.entity';
import { SubmissionStatus } from '@src/infraestructure/shared/enums/SubmissionStatus';
import { WayToPayId } from '@src/infraestructure/shared/enums/WayToPay';
import { Op } from 'sequelize';
import {
  NewSaleDto,
  UpdateSaleDto,
} from 'src/core/shared/dto/Sale/sale_dto';
import { Sale } from 'src/domain/entities/Sale.entity';

export class SaleRepository {
  constructor() { }

  async findOne(id: number) {
    try {
      return Sale.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async findAll() {
    try {
      return Sale.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async create(body: NewSaleDto) {
    const transaction = await Sale.sequelize.transaction(); // Iniciar transacción

    try {
      // 1. Crear la venta
      const sale = await Sale.create(body, { transaction });

      // 2. Obtener el número de secuencia de FinancialSequence con bloqueo optimista
      const financialSequence = await FinancialSequence.findOne({
        include: [
          {
            model: IssuableDocument,
            required: true,
            attributes: ['name']
          }
        ],
        where: { issuable_document_id: body.issuable_document_id },
        transaction,
      });

      if (!financialSequence) {
        throw new Error('Secuencia financiera no encontrada');
      }

      // Guardar el número secuencial actual y sumarle +1
      const documentNumber = financialSequence.current_correlative + 1;

      // 3. Actualizar el número de secuencia en FinancialSequence con control de versión
      await financialSequence.update(
        { current_correlative: documentNumber },
        {
          where: {
            id: financialSequence.id,
            version: financialSequence.version, // Control de versión para manejo de concurrencia
          },
          transaction,
        },
      );

      // 4. Crear el documento de venta asociado 
      const saleDocument = await SaleDocument.create({
        sale_id: sale.id,
        issuance_date: body.sale_date,
        issuable_document_id: body.issuable_document_id,
        submission_status: SubmissionStatus.created,
        serie: financialSequence.serie,
        correlative: financialSequence.current_correlative,
        type_document: financialSequence.issuableDocument.name
      }, { transaction });

      if (body.type_payment_id == WayToPayId.contado) {
        // 5. Crear los abonos de la venta 
        const sales_payment: any = body?.sales_payment;

        const salesPaymentPromises = sales_payment.schedule.map((payment: any) =>
          SalesPayment.create({
            ...payment,
            sale_id: sale.id
          }, { transaction })
        );

        await Promise.all(salesPaymentPromises);
      }

      if (body.type_payment_id == WayToPayId.credito) {
        // 5. Crear los cronograma de pagos
        const payment_schedule: any = body?.payment_schedule;

        const salePaymentSchedule: any = await SalePaymentSchedule.create({
          sale_id: sale.id,
          payment_first_date: payment_schedule[0].payment_date,
          payment_last_date: payment_schedule[payment_schedule.length - 1].payment_date,
          total_sale: body.total_sale,
          number_quotas: payment_schedule.length
        }, { transaction })

        const payment_schedule_data: Array<Object> = body?.payment_schedule.map((quota: any) => ({ sale_payment_schedule_id: salePaymentSchedule.id, ...quota }))

        await PaymentSchedule.bulkCreate(payment_schedule_data, { transaction });
      }


      // Confirmar la transacción
      await transaction.commit();

      return { sale, saleDocument };

    } catch (error: any) {
      // Rollback en caso de error
      console.log(error)
      await transaction.rollback();
      throw new SaleApplicationError(error);
    }
  }

  async update(id: number, body: UpdateSaleDto) {
    try {
      return Sale.update(body, { where: { id: id } });
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async deleted(id: number) {
    try {
      return Sale.destroy({ where: { id: id } });
    } catch (error: any) {
      throw new SaleApplicationError(error);
    }
  }

  async getAllReceivable(filters: any) {
    try {
      const whereConditions: any = {
        deleted_at: null,
        type_payment_id: 2,
      };

      if (filters?.status !== undefined) {
        switch (filters.status) {
          case 'paid':
            whereConditions.paid = true;
            break;
          case 'pending':
            whereConditions.paid = false;
            break;
          default:
            break;
        }
      }

      if (filters?.client) {
        whereConditions['$Client.type_entity$'] = { [Op.iLike]: `%${filters.client}%` };
      }

      if (filters?.startDate && filters?.endDate) {
        whereConditions.sale_date = {
          [Op.between]: [filters.startDate, filters.endDate],
        };
      } else if (filters?.startDate) {
        whereConditions.sale_date = { [Op.gte]: filters.startDate };
      } else if (filters?.endDate) {
        whereConditions.sale_date = { [Op.lte]: filters.endDate };
      }

      const data: any = await Sale.findAll({
        include: [
          {
            model: Client,
            required: true,
            attributes: ['type_entity'],
            include: [
              {
                model: Person,
                required: false,
                attributes: ['name', 'main_phone']
              },
              {
                model: Company,
                required: false,
                attributes: ['name', 'main_phone']
              },
              {
                model: User,
                as: 'seller',
                required: false,
                attributes: ['user']
              },
            ]
          },
          {
            model: SaleDocument,
            required: false,
            attributes: ['type_document', 'serie', 'correlative', 'issuance_date']
          },
          {
            model: User,
            as: 'seller',
            required: false,
            attributes: [['user', 'sale_assigned_seller']]
          },
          {
            model: SalePaymentSchedule,
            required: false
          }
        ],
        attributes: ['id', 'crypto_uuid', 'total_sale', 'sale_date', 'paid'],
        where: whereConditions,
      });

      return data;
    } catch (error: any) {
      throw new SaleApplicationError(error)
    }
  }
}
