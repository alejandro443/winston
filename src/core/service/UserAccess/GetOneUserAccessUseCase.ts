import { AccessRolService } from "@src/domain/services/AccessRolService/AccessRolService";

export class GetOneAccessRolUseCase {
  constructor(private accessService?: AccessRolService) {
    this.accessService = new AccessRolService();
  }

  async getOneAccessRol(id: number) {
    try {
      const response =
        await this.accessService.getOneAccessRol(id);
      return { ...response.dataValues};
    } catch (error) {
      return error;
    }
  }
}
