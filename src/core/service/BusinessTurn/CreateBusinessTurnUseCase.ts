import { BusinessTurnService } from 'src/domain/services/BusinessTurnService/BusinessTurnService';
import { NewBusinessTurnDto } from 'src/core/shared/dto/BusinessTurn/business_turn_dto';

export class CreateBusinessTurnUseCase {
  constructor(private businessTurnService?: BusinessTurnService) {
    this.businessTurnService = new BusinessTurnService();
  }

  async createBusinessTurn(businessTurn: NewBusinessTurnDto) {
    try {
      const response: any =
        await this.businessTurnService?.createBusinessTurn(businessTurn);
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
