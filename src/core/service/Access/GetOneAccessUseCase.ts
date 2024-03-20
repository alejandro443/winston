import { AccessService } from "@src/domain/services/AccesssService/AccessService";

export class GetOneAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async getOneAccess(id: number) {
    try {
      const response =
        await this.accessService.getOneAccess(id);
      return { ...response.dataValues};
    } catch (error) {
      return error;
    }
  }
}
