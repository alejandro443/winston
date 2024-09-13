import { FinancialSequence } from '@src/domain/entities/FinancialSequence.entity';
import { IssuableDocument } from '@src/domain/entities/IssuableDocument.entity';
import { SaleDocument } from '@src/domain/entities/SaleDocument.entity';
import { SubmissionStatus } from '@src/infraestructure/shared/enums/SubmissionStatus';
import {
  NewSaleDto,
  UpdateSaleDto,
} from 'src/core/shared/dto/Sale/sale_dto';
import { Sale } from 'src/domain/entities/Sale.entity';

export class SaleRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Sale.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Sale.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
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
        where: { issuable_document_id: body.issuable_document_id},
        transaction,
      });

      console.log(financialSequence)

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
        issuable_document_id: body.issuable_document_id,
        submission_status: SubmissionStatus.created,
        serie: financialSequence.serie,
        correlative: financialSequence.current_correlative,
        type_document: financialSequence.issuableDocument.name
      }, { transaction });

      // Confirmar la transacción
      await transaction.commit();

      return { sale, saleDocument };

    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdateSaleDto) {
    try {
      return Sale.update(body, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Sale.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
