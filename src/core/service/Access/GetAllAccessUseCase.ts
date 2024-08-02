import { AccessService } from '@src/domain/services/AccessService/AccessService';

export class GetAllAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async getAllAccess() {
    try {
      const response: any = await this.accessService?.getAllAccess();

      return response.map((access: any) => ({ ...access.dataValues }));
    } catch (error: any) {
      return error;
    }
  }
}
