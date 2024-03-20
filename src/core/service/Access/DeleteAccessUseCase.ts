import { AccessService } from "@src/domain/services/AccesssService/AccessService";

export class DeleteAccessUseCase {
  constructor(private accessService?: AccessService) {
    this.accessService = new AccessService();
  }

  async deleteAccess(id: number) {
    try {
      const response =
        await this.accessService.deleteAccess(id);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
