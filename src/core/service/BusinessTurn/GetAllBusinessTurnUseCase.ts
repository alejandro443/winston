import { BusinessTurnService } from 'src/domain/services/BusinessTurnService/BusinessTurnService';

export class GetAllBusinessTurnUseCase {
  constructor(private businessTurnService?: BusinessTurnService) {
    this.businessTurnService = new BusinessTurnService();
  }

  async getAllBusinessTurn() {
    try {
      const response: any =
        await this.businessTurnService?.getAllBusinessTurn();

      return response.map((businessTurn: any) => ({
        id: businessTurn.id,
        code: businessTurn.code,
        name: businessTurn.name,
        description: businessTurn.description,
        status: businessTurn.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
