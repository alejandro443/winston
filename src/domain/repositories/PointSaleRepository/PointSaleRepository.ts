import { PointSaleApplicationError } from '@src/core/shared/error/PointSaleApplicationError';
import {
  NewPointSaleDto,
  UpdatePointSaleDto,
} from 'src/core/shared/dto/PointSale/point_sale_dto';
import { PointSale } from 'src/domain/entities/PointSale.entity';

export class PointSaleRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return PointSale.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return PointSale.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewPointSaleDto) {
    try {
      return PointSale.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdatePointSaleDto) {
    try {
      const [rowsUpdated, [updateData]] = await PointSale.update(body, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        throw new PointSaleApplicationError(`No se encontró registros con el id: ${id}`);
      }
  
      return updateData
    } catch (error: any) {
      throw new PointSaleApplicationError(error);

    }
  }

  async deleted(id: number) {
    try {
      return PointSale.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
