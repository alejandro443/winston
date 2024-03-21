import { AccessRolService } from "@src/domain/services/AccessRolService/AccessRolService";

export class GetAllAccessRolUseCase {
  constructor(private accessService?: AccessRolService) {
    this.accessService = new AccessRolService();
  }

  async getAllAccessRol() {
    try {
      const response = await this.accessService.getAllAccessRol();

      return response.map((access) => ({...access}));
    } catch (error) {
      return error;
    }
  }
}
