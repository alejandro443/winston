import {
  NewBusinessTurnDto,
  UpdateBusinessTurnDto,
} from 'src/core/shared/dto/BusinessTurn/business_turn_dto';
import { BusinessTurn } from 'src/domain/entities/BusinessTurn.entity';

export class BusinessTurnRepository {
  constructor() {}

  async findOne(id_business_turn: number) {
    try {
      return BusinessTurn.findOne({ where: { id: id_business_turn } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return BusinessTurn.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(business_turn: NewBusinessTurnDto) {
    try {
      return BusinessTurn.create(business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async update(id_business_turn: any, business_turn: UpdateBusinessTurnDto) {
    try {
      return BusinessTurn.update(business_turn, { where: { id: id_business_turn } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id_business_turn: number) {
    try {
      return BusinessTurn.destroy({ where: { id: id_business_turn } });
    } catch (error: any) {
      return error;
    }
  }
}
