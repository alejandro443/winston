import { BusinessTurnService } from 'src/domain/services/BusinessTurnService/BusinessTurnService';

export class GetOneBusinessTurnUseCase {
  constructor(private businessTurnService?: BusinessTurnService) {
    this.businessTurnService = new BusinessTurnService();
  }

  async getOneBusinessTurn(id_business_turn: number) {
    try {
      const response: any =
        await this.businessTurnService?.getOneBusinessTurn(id_business_turn);
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
