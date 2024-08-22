import { BusinessTurnService } from 'src/domain/services/BusinessTurnService/BusinessTurnService';

export class DeleteBusinessTurnUseCase {
  constructor(private businessTurnService?: BusinessTurnService) {
    this.businessTurnService = new BusinessTurnService();
  }

  async deleteBusinessTurn(id_business_turn: number) {
    try {
      const response: any =
        await this.businessTurnService?.deleteBusinessTurn(id_business_turn);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
