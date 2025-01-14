import { AccessService } from '@src/domain/services/AccessService/AccessService';

export class DeleteAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async deleteAccess(id: number) {
    try {
      const response: any = await this.accessService?.deleteAccess(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
