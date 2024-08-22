import {
  AllBusinessTurnDto,
  NewBusinessTurnDto,
  OneBusinessTurnDto,
  UpdateBusinessTurnDto,
} from 'src/core/shared/dto/BusinessTurn/business_turn_dto';

export interface BusinessTurnApplication {
  getAllBusinessTurn(): Promise<Array<AllBusinessTurnDto>>;
  getOneBusinessTurn(id_business_turn: number): Promise<OneBusinessTurnDto>;
  createBusinessTurn(
    business_turn: NewBusinessTurnDto,
  ): Promise<OneBusinessTurnDto>;
  updateBusinessTurn(
    id_business_turn: number,
    business_turn: UpdateBusinessTurnDto,
  ): Promise<OneBusinessTurnDto>;
  deleteBusinessTurn(id_business_turn: number): any;
}
