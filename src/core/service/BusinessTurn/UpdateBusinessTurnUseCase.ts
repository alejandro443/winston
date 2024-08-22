import { UpdateBusinessTurnDto } from 'src/core/shared/dto/BusinessTurn/business_turn_dto';
import { BusinessTurnService } from 'src/domain/services/BusinessTurnService/BusinessTurnService';

export class UpdateBusinessTurnUseCase {
  constructor(private businessTurnService?: BusinessTurnService) {
    this.businessTurnService = new BusinessTurnService();
  }

  async updateBusinessTurn(
    id_business_turn: number,
    businessTurn: UpdateBusinessTurnDto,
  ) {
    try {
      const response: any =
        await this.businessTurnService?.updateBusinessTurn(
          id_business_turn,
          businessTurn,
        );
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
