import { AccessService } from "@src/domain/services/AccesssService/AccessService";

export class GetAllAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async getAllAccess() {
    try {
      const response = await this.accessService.getAllAccess();

      return response.map((access) => ({...access}));
    } catch (error) {
      return error;
    }
  }
}
