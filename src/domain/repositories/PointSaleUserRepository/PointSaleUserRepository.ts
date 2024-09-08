import { PointSaleUserApplicationError } from '@src/core/shared/error/PointSaleUserApplicationError';
import { PointSale } from '@src/domain/entities/PointSale.entity';
import { User } from '@src/domain/entities/User.entity';
import {
  NewPointSaleUserDto,
  UpdatePointSaleUserDto,
} from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';
import { PointSaleUser } from 'src/domain/entities/PointSaleUser.entity';

export class PointSaleUserRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return PointSaleUser.findOne({ 
        where: { id: id },
        include: [
          {
            model: User,
            required: true
          },
          {
            model: PointSale,
            required: true
          }
        ]
      });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return PointSaleUser.findAll({
        include: [
          {
            model: User,
            required: true
          },
          {
            model: PointSale,
            required: true
          }
        ]
      });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewPointSaleUserDto) {
    try {
      return PointSaleUser.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdatePointSaleUserDto) {
    try {
      const [rowsUpdated, [updateData]] = await PointSaleUser.update(body, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        throw new PointSaleUserApplicationError(`No se encontró registros con el id: ${id}`);
      }
  
      return updateData
    } catch (error: any) {
      throw new PointSaleUserApplicationError(error);

    }
  }

  async deleted(id: number) {
    try {
      return PointSaleUser.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
