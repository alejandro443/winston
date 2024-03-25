import { AccessService } from '@src/domain/services/AccessService/AccessService';

export class GetOneAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async getOneAccess(id: number) {
    try {
      const response: any = await this.accessService?.getOneAccess(id);
      return { ...response.dataValues };
    } catch (error: any) {
      return error;
    }
  }
}
