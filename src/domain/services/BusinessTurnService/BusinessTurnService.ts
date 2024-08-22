import { NewBusinessTurnDto } from 'src/core/shared/dto/BusinessTurn/business_turn_dto';
import { BusinessTurnRepository } from 'src/domain/repositories/BusinessTurnRepository/BusinessTurnRepository';

export class BusinessTurnService {
  constructor(private repository?: BusinessTurnRepository) {
    this.repository = new BusinessTurnRepository();
  }

  async getOneBusinessTurn(id_business_turn: number) {
    try {
      return this.repository?.findOne(id_business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async getAllBusinessTurn() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createBusinessTurn(business_turn: NewBusinessTurnDto) {
    try {
      return this.repository?.create(business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async updateBusinessTurn(id_business_turn: any, business_turn: NewBusinessTurnDto) {
    try {
      return this.repository?.update(id_business_turn, business_turn);
    } catch (error: any) {
      return error;
    }
  }

  async deleteBusinessTurn(id_business_turn: number) {
    try {
      return this.repository?.deleted(id_business_turn);
    } catch (error: any) {
      return error;
    }
  }
}
